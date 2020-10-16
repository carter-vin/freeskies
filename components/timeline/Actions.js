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

export default function Actions({ actions, index }) {
  const [rateVisible, setRateVisible] = useState(false);
  const handleRateVisibleToggle = () => setRateVisible((state) => !state);

  return (
    <div className={styles.post_actions}>
      <Tooltip placement="top" title={'Rating'}>
        <Popover
          content={() => <RatingSlide dark size="large" />}
          // title="Title"
          placement="topLeft"
          trigger="click"
          visible={rateVisible}
          onVisibleChange={handleRateVisibleToggle}
        >
          <div className={styles.icon_container}>
            <FontAwesomeIcon icon={['far', 'star']} />
            {/* <StarFilled /> */}
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
          onClick={() => actions.showCommentModal()}
        >
          <FontAwesomeIcon icon={['far', 'comment-alt']} />
          {/* <MessageFilled /> */}
          <span className={styles.comment_count}>2</span>
        </div>
      </Tooltip>
    </div>
  );
}
