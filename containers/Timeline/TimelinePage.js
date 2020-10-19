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

// TODO: temporary variable
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlDOEJEQzUzLTlFQ0MtNDFDOS05OTdELTlERkI1NkIwQzdDMSIsImNyZWF0ZWRBdCI6IjIwMjAtMTAtMTZUMTQ6MjQ6NTkuMloiLCJ1c2VybmFtZSI6ImFsZXg0IiwiZmlyc3ROYW1lIjoiQWxleCIsImxhc3ROYW1lIjoiSyIsImZlbWFsZSI6ZmFsc2UsImVtYWlsIjoiYUBhLmFhIiwicGhvbmUiOiIrMTIwMjU1NTAxNTYiLCJEb0IiOiIyMDIwLTA5LTMwIiwiaWF0IjoxNjAzMTIzNDY5LCJleHAiOjE2MDMxMjcwNjl9.8K9mKKeuQumcFKvYBwFIT5wiwhoDJ-zc5YwyYhuvHeU';

export default function TimelinePage() {
  const [storage, dispatch] = useContext(TimeLineContext);

  const getTimeline = async () => {
    try {
      dispatch(setLoading(true));
      const { data, status } = await API({
        method: 'post',
        url: '/accounts/timeline',
        headers: { 'x-token': token },
      });

      if (status === 200) {
        dispatch(setTimelineData(data));
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
    getTimeline();
  }, []);

  useEffect(() => {
    console.log('storage', storage);
  }, [storage]);

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
