import styles from './styles/profile.module.scss';
import { useEffect, useContext } from 'react';
import classnames from 'classnames';
import { CameraOutlined } from '@ant-design/icons';
import { Button, Upload, message, Input, Tabs, Rate } from 'antd';
import API from '../../configs/API';
import PhotoSection from 'components/profile/PhotoSection';
import FeedPosts from 'components/profile/FeedPosts';
import PostingPost from 'components/profile/PostingPost';
import RatedSection from 'components/profile/RatedSection';
import requireAuth from 'helpers/hoc/requireAuth';
import { ProfileContext } from './storage/ProfileContext';
import { setLoading, setFriendsData, setAccountsData } from './actions';
import Avatar from '../../components/common/Avatar';

const uploadCoverOptions = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const uploadAvatarOptions = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function Profile({ auth }) {
  const [storage, dispatch] = useContext(ProfileContext);
  // console.log('storage', storage, 'auth', auth)
  const getFriends = async (token, withoutLoading = false) => {
    // console.warn(authServices.auth, authServices.localstorage);
    try {
      if (!withoutLoading) dispatch(setLoading(true));
      const request = await API({
        method: 'post',
        url: '/accounts/timeline',
        headers: { 'x-token': auth.token },
      });
      const { data, status } = request;
      console.log('getFriends_data=', data, 'getFriends_status=', status)
      if (status === 200) {
        dispatch(setFriendsData(data));
        console.log('=========');
      } else if (status === 403) {
        console.log('================= Refresh token !');

        authServices.refreshToken(getFriends);
      } else {
        message.error(data?.message || 'Something wrong');
      }

      if (!withoutLoading) dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      if (!withoutLoading) dispatch(setLoading(false));
    }
  };

  const getAccount = async (token, withoutLoading = false) => {
    try {
      if (!withoutLoading) dispatch(setLoading(true));
      const request = await API({
        method: 'get',
        url: '/accounts',
        headers: { 'x-token': auth.token },
      });
      const { data, status } = request;
      console.log('getAccount_data=', data, 'getAccount_status=', status)
      if (status === 200) {
        dispatch(setAccountsData(data));
        console.log('=========');
      } else if (status === 403) {
        console.log('================= Refresh token !');

        authServices.refreshToken(getFriends);
      } else {
        message.error(data?.message || 'Something wrong');
      }

      if (!withoutLoading) dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      if (!withoutLoading) dispatch(setLoading(false));
    }
  }

  const createPost = async (dataForRequest, type) => {
    try {
      dispatch(setLoading(true, 'posting'));
      let reqData = {};
      let url = '';

      if (type === 'text') {
        url = '/posts';
        reqData.text = dataForRequest;
      } else if (type === 'textMedia') {
        url = '/photos';
      }

      const request = await API({
        method: 'post',
        url,
        data: reqData,
        headers: { 'x-token': auth.token },
      });
      const { data, status } = request;

      console.warn('createPost', data, status);

      if (status === 201) {
        getAccount(auth.token);
      } else {
        message.error(data?.message || 'Something wrong');
      }

      dispatch(setLoading(false, 'posting'));

      return await request;
    } catch (error) {
      dispatch(setLoading(false, 'posting'));
    }
  };

  useEffect(() => {
    getFriends(auth.token);
    getAccount(auth.token);
  }, []);

  console.log('store', storage)

  const { accountData } = storage

  return (

    <div>
      <div className={classnames(styles.container, styles.user_profile)}>
        <div
          className={styles.cover}
          style={{
            backgroundImage: `url(${accountData?.profileBackgroundImage})`,
          }}
        >
          <div className={styles.change_cover}>
            <Upload {...uploadCoverOptions}>
              <Button ghost type="dashed">
                Change cover
              </Button>
            </Upload>
          </div>
        </div>

        <div className={styles.profile}>
          <div className={styles.avatar}>
            <div className={styles.avatar_image}>
              <Avatar
                size={140}
                url={accountData?.profilePhoto}
                text={accountData?.username}
              />
            </div>
            <div className={styles.change_avatar}>
              <Upload {...uploadAvatarOptions}>
                <CameraOutlined className={styles.change_avatar_image} />
              </Upload>
            </div>
          </div>

          <div className={styles.user_content}>
            <div className={styles.user_info}>
              <div className={styles.heade_section}>
                <div className={styles.left_side}>
                  <p className={styles.fullname}>
                    <span>{`${accountData?.firstName} ${accountData?.lastName}`}</span>
                  </p>
                </div>
                <div className={styles.right_side}>
                  <p className={styles.rating}>
                    <Rate
                      disabled
                      allowHalf
                      defaultValue={Math.round(accountData?.rating || 0)}
                      style={{ color: '#fadb14', fontSize: '1em' }}
                    />
                    <span className={styles.rating_text}>
                      {Math.round(accountData?.rating || 0)}
                    </span>
                  </p>
                </div>
              </div>
              {/* ==== */}
            </div>
            <div className={styles.bottom_section}>
              <div className={styles.left_side}>
                <div className={styles.user_actions}>
                  <div className={styles.follow_actions}>
                    <p className={styles.followers}>
                      {accountData?.followersCount} followers
                    </p>
                  </div>
                  <p className={styles.followers_formobile}>
                    {accountData?.followersCount} followers / {accountData?.followingCount}{' '}
                    following
                  </p>
                </div>
              </div>
              <div className={styles.right_side}>
                <div className={styles.user_actions}>
                  {/* TODO: show this button and followers text another user page */}
                  {/* <p className={styles.followers}>
                    {user?.followingCount} following
                  </p> */}
                  {/* <Button type="primary" shape="round" size="large">
                    Follow
                  </Button> */}
                  <Button type="primary" shape="round" size="large">
                    Edit profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={classnames(
          styles.container,
          styles.content,
          styles.container_bg
        )}
      >
        <div className={styles.profile_contents}>
          <PhotoSection user={accountData} />
          <div className={classnames(styles.container_bg, styles.section)}>
            <div className={styles.section_title}>
              <p>Friends</p>
              <Button type="link">All friends</Button>
            </div>
            <div
              className={classnames(
                styles.friends_list,
                styles.sections_content
              )}
            >
              {accountData?.friends.map((item, index) => {
                return (
                  <div className={styles.friend} key={index}>
                    <Avatar
                      size={80}
                      url={item?.profilePhoto}
                      text={item?.username}
                    />
                    <div className={styles.friend_name}>
                    <span>{item.firstName} {item.lastName}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <RatedSection user={accountData} />
        </div>

        <div className={styles.activity}>
          <PostingPost
            loading={storage.postingLoading}
            onPosting={createPost}
          />
          <FeedPosts user={accountData} />
        </div>
      </div>
    </div>
  );
}

export default requireAuth(Profile);
