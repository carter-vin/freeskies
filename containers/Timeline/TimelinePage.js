import { useContext, useEffect } from 'react';
import Header from 'components/header/Header';
import TimelinePosts from 'components/timeline/TimelinePosts';
import PostingPost from 'components/profile/PostingPost';
import styles from './styles/timeline.module.scss';
import API from 'configs/API';
import { TimeLineContext } from './storage/TimelineContext';

// TODO: temporary variable
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlDOEJEQzUzLTlFQ0MtNDFDOS05OTdELTlERkI1NkIwQzdDMSIsImNyZWF0ZWRBdCI6IjIwMjAtMTAtMTZUMTQ6MjQ6NTkuMloiLCJ1c2VybmFtZSI6ImFsZXg0IiwiZmlyc3ROYW1lIjoiQWxleCIsImxhc3ROYW1lIjoiSyIsImZlbWFsZSI6ZmFsc2UsImVtYWlsIjoiYUBhLmFhIiwicGhvbmUiOiIrMTIwMjU1NTAxNTYiLCJEb0IiOiIyMDIwLTA5LTMwIiwiaWF0IjoxNjAzMTE5NTEyLCJleHAiOjE2MDMxMjMxMTJ9.QxG-xs_Sz-BUhApeGtfnxvUWKN_EY9vWIupp01yTqYA';

export default function TimelinePage() {
  const [storage, dispatch] = useContext(TimeLineContext);
  console.warn(storage);

  const getTimeline = async () => {
    try {
      const { data, status } = await API({
        method: 'post',
        url: '/accounts/timeline',
        headers: { 'x-token': token },
      });

      if (status === 200) {
      }

      console.log('request', data, status);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTimeline();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.timeline}>
        <div className={styles.feed_container}>
          <PostingPost />
          <TimelinePosts />
        </div>
      </div>
    </>
  );
}
