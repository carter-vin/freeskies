import styles from './styles/profile.module.scss';
import classnames from 'classnames';
import { CameraOutlined } from '@ant-design/icons';
import { Button, Input, Tabs, Rate } from 'antd';
import PhotoSection from 'components/profile/PhotoSection';
import FeedPosts from 'components/profile/FeedPosts';
import PostingPost from 'components/profile/PostingPost';
import RatedSection from 'components/profile/RatedSection';
import requireAuth from 'helpers/hoc/requireAuth';
import { connect } from 'react-redux';
import Avatar from '../../components/common/Avatar';

function Profile({ auth: { user } }) {
  return (
    <div>
      <div className={classnames(styles.container, styles.user_profile)}>
        <div
          className={styles.cover}
          style={{
            backgroundImage:
              'url(https://www.sleekcover.com/covers/water-drops-on-plant-facebook-cover.jpg)',
          }}
        >
          <div className={styles.change_cover}>
            <Button ghost type="dashed">
              Change cover
            </Button>
          </div>
        </div>

        <div className={styles.profile}>
          <div className={styles.avatar}>
            <div className={styles.avatar_image}>
              <Avatar size={140} text={user?.firstName} />
            </div>
            <div className={styles.change_avatar}>
              <CameraOutlined className={styles.change_avatar_image} />
            </div>
          </div>

          <div className={styles.user_content}>
            <div className={styles.user_info}>
              <div className={styles.heade_section}>
                <div className={styles.left_side}>
                  <p className={styles.fullname}>
                    <span>{`${user?.firstName} ${user?.lastName}`}</span>
                  </p>
                </div>
                <div className={styles.right_side}>
                  <p className={styles.rating}>
                    <Rate
                      disabled
                      allowHalf
                      defaultValue={Math.round(user?.rating || 0)}
                      style={{ color: '#fadb14', fontSize: '1em' }}
                    />
                    <span className={styles.rating_text}>
                      {Math.round(user?.rating || 0)}
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
                      {user?.followersCount} followers
                    </p>
                  </div>
                  <p className={styles.followers_formobile}>
                    {user?.followersCount} followers / {user?.followingCount}{' '}
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
          <PhotoSection user={user} />
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
              {[0, 0, 0, 0, 0, 0, 0, 0].map((item, index) => {
                return (
                  <div className={styles.friend} key={index}>
                    <div className={styles.avatar}>
                      <img
                        src={`https://api.adorable.io/avatars/128/adorable${index}.png`}
                        alt=""
                      />
                    </div>
                    <div className={styles.friend_name}>
                      <span>John Doe</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <RatedSection />
        </div>

        <div className={styles.activity}>
          <PostingPost />
          <FeedPosts />
        </div>
      </div>
    </div>
  );
}

export default requireAuth(Profile);
