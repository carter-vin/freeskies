import {
  LikeFilled,
  MessageFilled,
  StarFilled,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles/actions.module.scss';

export default function Actions({ actions, index }) {
  return (
    <div className={styles.post_actions}>
      <Tooltip placement="top" title={'Rating'}>
        <div className={styles.icon_container}>
          <FontAwesomeIcon icon={['far', 'star']} />
          {/* <StarFilled /> */}
        </div>
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
