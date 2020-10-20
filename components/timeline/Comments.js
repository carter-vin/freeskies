import { Input, Popover } from 'antd';
import styles from './styles/comment.module.scss';
import classnames from 'classnames';
import { useEffect, useState } from 'react';
import TrimText from 'components/common/TrimText';
import Avatar from '../common/Avatar';
import API from 'configs/API';
import { message } from 'antd';
import DragableRating from '../forms/rating/DragableRating';
import withAuth from 'helpers/hoc/withAuth';
import RatingSlide from '../forms/rating/RatingSlide';

const { TextArea } = Input;

function CommentItem({ message, mine, author, rating, id, onRateComment }) {
  const fullName = `${author?.firstName} ${author?.lastName}`;

  const handleRateComment = (rate) => {
    onRateComment(id, rate);
  };

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
          text={fullName}
        />
        <RatingSlide
          defaultRate={rating}
          withoutText
          dark
          size="small"
          onChange={handleRateComment}
        />
        {/* <DragableRating rating={rating} handleRateComment={handleRateComment} /> */}
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

function Comments({
  data = [],
  modalMode = false,
  id,
  type,
  auth,
  onUpdateTimeline,
}) {
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

  // useEffect(() => {
  //   setCommentList(data);
  // }, [data]);

  const handleEnterKey = (e) => {
    if (e.nativeEvent.keyCode === 13) {
      e.preventDefault();

      onComment(type, id, commentText);

      setCommentText('');
    }
  };

  const handleChangeText = (e) => {
    setCommentText(e.target.value);
  };

  const onComment = async (type, postId, text) => {
    // console.log(type, text, postId);
    try {
      let url = '';

      if (type === 'Photo') {
        url = '/photos/comment';
      } else if (type === 'VideoClip') {
        url = '/video-clips/comment';
      } else if (type === 'Item') {
        url = '/items/comment';
      }

      const request = await API({
        method: 'post',
        url,
        data: {
          text,
          commented: postId,
        },
        headers: { 'x-token': auth.token },
      });
      const { data, status } = request;

      if (status === 201) {
        onUpdateTimeline();
        message.success('Your comment published successfuly');
      } else {
        message.error(data?.message || 'Something wrong');
        throw new Error();
      }

      return await request;
    } catch (error) {
      console.log(error);
    }
  };

  const onRateComment = async (commentId, rate) => {
    console.log(commentId, rate);
    try {
      const request = await API({
        method: 'post',
        url: '/comments/rate',
        data: {
          rated: commentId,
          rating: rate,
        },
        headers: { 'x-token': auth.token },
      });
      const { data, status } = request;

      if (status === 201) {
        onUpdateTimeline();
        message.success('Your comment published successfuly');
      } else {
        message.error(data?.message || 'Something wrong');
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={classnames(styles.comments, {
        [styles.modal_mode]: modalMode,
      })}
    >
      <div className={styles.comments_wrapper}>
        {(modalMode ? data : data.slice(0, 2)).map((item) => (
          <CommentItem
            key={item.id}
            id={item.id}
            mine={item.mine}
            message={item.text}
            author={item.account}
            rating={item.rating}
            onRateComment={onRateComment}
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

export default withAuth(Comments);
