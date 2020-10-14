import {
  LikeFilled,
  MessageFilled,
  StarFilled,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Tooltip } from 'antd';
import styles from './styles/actions.module.scss';

export default function Actions({ actions, index }) {
  return (
    <div className={styles.post_actions}>
      <Tooltip placement="top" title={'Rating'}>
        <div>
          <StarFilled />
        </div>
      </Tooltip>
      <Tooltip placement="top" title={'Like'}>
        <div>
          <LikeFilled />
        </div>
      </Tooltip>
      <Tooltip placement="top" title={'Share'}>
        <div>
          <ShareAltOutlined />
        </div>
      </Tooltip>
      <Tooltip placement="top" title={'Comments'}>
        <div onClick={() => actions.showCommentModal()}>
          <MessageFilled />
          <p>
            <span>(2)</span>
          </p>
        </div>
      </Tooltip>
    </div>
  );
}
