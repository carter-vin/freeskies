import { useContext, useEffect } from 'react';
import Header from 'components/header/Header';
import TimelinePosts from 'components/timeline/TimelinePosts';
import PostingPost from 'components/profile/PostingPost';
import styles from './styles/timeline.module.scss';
import API from 'configs/API';
import { message } from 'antd';
import { TimeLineContext } from './storage/TimelineContext';
import { setLoading, setTimelineData } from './actions';
import LoadingWrapper from 'components/common/LoadingWrapper';
import withAuth from 'helpers/hoc/withAuth';

function TimelinePage({ authServices, auth }) {
  const [storage, dispatch] = useContext(TimeLineContext);

  const getTimeline = async (token, withoutLoading = false) => {
    // console.warn(authServices.auth, authServices.localstorage);
    try {
      if (!withoutLoading) dispatch(setLoading(true));
      const request = await API({
        method: 'post',
        url: '/accounts/timeline',
        headers: { 'x-token': token },
      });
      const { data, status } = request;

      if (status === 200) {
        dispatch(setTimelineData(data));
        console.log('=========');
      } else if (status === 403) {
        console.log('================= Refresh token !');

        authServices.refreshToken(getTimeline);
      } else {
        message.error(data?.message || 'Something wrong');
      }

      if (!withoutLoading) dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      if (!withoutLoading) dispatch(setLoading(false));
    }
  };

  const createPost = async (dataForRequest, type) => {
    try {
      dispatch(setLoading(true, 'posting'));
      let reqData = {};
      let url = '';

      if (type === 'text') {
        url = '/posts';
        reqData.text = dataForRequest;
      } else if (type === 'textMedia') {
        // TODO: with media api
        throw new Error();
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
        getTimeline(auth.token, true);
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
    getTimeline(auth.token);
  }, []);

  // useEffect(() => {
  //   console.log('storage', storage);
  // }, [storage]);

  return (
    <>
      <Header />
      <div className={styles.timeline}>
        <div className={styles.feed_container}>
          <PostingPost
            loading={storage.postingLoading}
            onPosting={createPost}
          />
          <LoadingWrapper loading={storage.loading}>
            <TimelinePosts data={storage.timelineData} />
          </LoadingWrapper>
        </div>
      </div>
    </>
  );
}

export default withAuth(TimelinePage);
