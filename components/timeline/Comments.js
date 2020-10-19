import { Input, Popover } from 'antd';
import styles from './styles/comment.module.scss';
import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { RatingSlide } from 'components/forms';
import { StarFilled } from '@ant-design/icons';
import TrimText from 'components/common/TrimText';
import Avatar from '../common/Avatar';
import DragableRating from '../forms/rating/DragableRating';

const { TextArea } = Input;

function CommentItem({ message, mine, author, rating }) {
  const [rateVisible, setRateVisible] = useState(false);

  const handleRateVisibleToggle = () => setRateVisible((state) => !state);
  const fullName = `${author.firstName} ${author.lastName}`;

  return (
    <div
      className={classnames(styles.comment_item, {
        [styles.not_mine]: !mine,
      })}
    >
      <div className={styles.avatar}>
        <Avatar
          url={mine ? 'https://api.adorable.io/avatars/50/adorable.png' : null}
          size={45}
          text="John"
        />
        <DragableRating rating={rating} />

        {/* <Popover
          content={() => <RatingSlide dark size="medium" />}
          // title="Title"
          placement="right"
          trigger="click"
          visible={rateVisible}
          onVisibleChange={handleRateVisibleToggle}
        >
          <div className={styles.rate}>
            <span className={styles.icon}>
              <StarFilled />
            </span>
            <span className={styles.rate_text}>4.5</span>
          </div>
        </Popover> */}
      </div>
      <div className={styles.message_container}>
        <div className={styles.message}>
          <span className={styles.author}>{fullName}</span>
          <p>
            <TrimText limit={110}>{message}</TrimText>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Comments({ data = [], modalMode = false }) {
  // if (show !== index) return null;
  const [commentText, setCommentText] = useState('');
  const [commentList, setCommentList] = useState([
    //   {
    //     mine: true,
    //     message: `Lorem Ipsum is simply dummy text of the printing and typesetting
    // industry. Lorem Ipsum has been the industry's standard dummy text
    // ever since the 1500s`,
    //   },
    //   { message: 'message' },
  ]);

  useEffect(() => {
    setCommentList(data);
  }, [data]);

  const handleEnterKey = (e) => {
    if (e.nativeEvent.keyCode === 13) {
      e.preventDefault();
      console.log('object');
      setCommentList((comments) => [
        ...comments,
        {
          mine: true,
          message: commentText,
        },
      ]);
      setCommentText('');
    }
  };

  const handleChangeText = (e) => {
    setCommentText(e.target.value);
  };

  return (
    <div
      className={classnames(styles.comments, {
        [styles.modal_mode]: modalMode,
      })}
    >
      <div className={styles.comments_wrapper}>
        {commentList.map((item) => (
          <CommentItem
            key={item.id}
            mine={item.mine}
            message={item.text}
            author={item.account}
            rating={item.rating}
          />
        ))}
      </div>

      <div className={styles.comment_box}>
        <div className={styles.avatar}>
          <Avatar
            url={'https://api.adorable.io/avatars/50/adorable.png'}
            size={45}
            text="John"
          />
        </div>
        <div className={styles.input}>
          <TextArea
            value={commentText}
            placeholder="What do you mean?"
            rows={2}
            onChange={handleChangeText}
            onKeyDown={handleEnterKey}
          />
        </div>
      </div>
    </div>
  );
}
