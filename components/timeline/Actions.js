import {
  LikeFilled,
  MessageFilled,
  StarFilled,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Popover, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles/actions.module.scss';
import RatingSlide from '../forms/rating/RatingSlide';
import { useState } from 'react';

export default function Actions({
  actions,
  index,
  postRate,
  onRatePost,
  id,
  type,
  comments,
}) {
  const [rateVisible, setRateVisible] = useState(false);
  const handleRateVisibleToggle = () => setRateVisible((state) => !state);

  return (
    <div className={styles.post_actions}>
      <Tooltip placement="top" title={'Rating'}>
        <Popover
          content={() => (
            <RatingSlide
              dark
              size="large"
              defaultRate={postRate}
              onChange={(rate) => {
                onRatePost(type, id, rate);
              }}
            />
          )}
          // title="Title"
          placement="topLeft"
          trigger="click"
          visible={rateVisible}
          onVisibleChange={handleRateVisibleToggle}
        >
          <div className={styles.icon_container}>
            <FontAwesomeIcon icon={['far', 'star']} />
            <span style={{ marginLeft: 5 }}>{postRate || 0}</span>
          </div>
        </Popover>
      </Tooltip>
      <Tooltip placement="top" title={'Like'}>
        <div className={styles.icon_container}>
          <FontAwesomeIcon icon={['far', 'thumbs-up']} />
          {/* <LikeFilled /> */}
        </div>
      </Tooltip>
      <Tooltip placement="top" title={'Share'}>
        <div className={styles.icon_container}>
          <FontAwesomeIcon icon={['far', 'share-square']} />
          {/* <ShareAltOutlined /> */}
        </div>
      </Tooltip>
      <Tooltip placement="top" title={'Comments'}>
        <div
          className={styles.icon_container}
          onClick={actions.handleShowCommentModal}
        >
          <FontAwesomeIcon icon={['far', 'comment-alt']} />
          {/* <MessageFilled /> */}
          <span className={styles.comment_count}>{comments.length}</span>
        </div>
      </Tooltip>
    </div>
  );
}
