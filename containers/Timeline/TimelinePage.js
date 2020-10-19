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

  const getTimeline = async (token) => {
    // console.warn(authServices.auth, authServices.localstorage);
    try {
      dispatch(setLoading(true));
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

      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
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
          <PostingPost />
          <LoadingWrapper loading={storage.loading}>
            <TimelinePosts data={storage.timelineData} />
          </LoadingWrapper>
        </div>
      </div>
    </>
  );
}

export default withAuth(TimelinePage);
