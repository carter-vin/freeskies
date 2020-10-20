import styles from './styles/timeline-post.module.scss';
import classnames from 'classnames';
import Comments from './Comments';
import { useState } from 'react';
import moment from 'moment';
import Actions from './Actions';
import TrimText from '../common/TrimText';
import { useModal } from 'react-modal-hook';
import CommentsModal from './CommentsModal';
import PhotosModal from '../profile/PhotosModal';
import Avatar from '../common/Avatar';

export default function TimelinePosts({ data, onUpdateTimeline, onRatePost }) {
  const [activePostData, setActivePostData] = useState({});
  const [showCommentModal, hideCommentModal] = useModal(({ in: open }) => (
    <CommentsModal
      postData={activePostData}
      onUpdateTimeline={onUpdateTimeline}
      title="Comments"
      showModal={open}
      onClose={hideCommentModal}
    />
  ));

  const [showPhotoModal, hidePhotoModal] = useModal(({ in: open }) => (
    <PhotosModal
      title="Photo detail"
      showModal={open}
      onClose={hidePhotoModal}
    />
  ));

  const handleShowCommentModal = (data) => {
    console.log(data);
    setActivePostData(data);
    showCommentModal();
  };

  const toggleCommentShow = (index) =>
    setCommentShow(commentShow === index ? null : index);

  return (
    <div className={styles.activity_content}>
      {data.map((item, index) => {
        const { account, profilePhoto, createdAt, type, comments } = item;
        const fullName = `${account?.firstName} ${account?.lastName}`;
        return (
          <div className={styles.post} key={item.id}>
            <div className={styles.post_content}>
              <div
                className={classnames(styles.image, {
                  // [styles.grid_2]: index === 1,
                  // [styles.grid_3]: index === 2,
                  // [styles.grid_4]: index === 3,
                })}
              >
                {type === 'Photo' && (
                  <div className={styles.image_item} onClick={showPhotoModal}>
                    <img src={item.src} alt="" />
                  </div>
                )}
              </div>
            </div>
            <div className={styles.post_header}>
              <div className={styles.avatar}>
                <Avatar
                  text={fullName}
                  url={profilePhoto}
                  size={80}
                  borderSize={3}
                />
              </div>

              <div className={styles.user_info}>
                <p className={styles.user_name}>{fullName}</p>
              </div>
            </div>
            <p className={styles.date}>
              {moment(createdAt).format('DD MMM YYYY - HH:mm A')}
            </p>

            <p className={styles.description}>
              <TrimText limit={110}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </TrimText>
            </p>
            <Comments
              id={item.id}
              type={item.type}
              data={comments}
              onUpdateTimeline={onUpdateTimeline}
            />
            <Actions
              id={item.id}
              type={item.type}
              postRate={item.rating}
              comments={comments}
              onRatePost={onRatePost}
              index={index}
              actions={{
                handleShowCommentModal: () => {
                  handleShowCommentModal(item);
                },
              }}
            />
          </div>
        );
      })}
      {/* {[0, 0, 0, 0].map((item, index) => (
        <div className={styles.post} key={index}>
          <div className={styles.post_content}>
            <div
              className={classnames(styles.image, {
                [styles.grid_2]: index === 1,
                [styles.grid_3]: index === 2,
                [styles.grid_4]: index === 3,
              })}
            >
              {index === 0 && (
                <div className={styles.image_item} onClick={showPhotoModal}>
                  <img
                    src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    alt=""
                  />
                </div>
              )}

              {index === 1 && (
                <>
                  <div
                    className={classnames(styles.image_item, styles.main_photo)}
                    onClick={showPhotoModal}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      alt=""
                    />
                  </div>
                  <div className={styles.image_item} onClick={showPhotoModal}>
                    <img
                      src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      alt=""
                    />
                  </div>
                </>
              )}

              {index === 2 && (
                <>
                  <div
                    className={classnames(styles.image_item, styles.main_photo)}
                    onClick={showPhotoModal}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      alt=""
                    />
                  </div>
                  <div className={styles.image_item} onClick={showPhotoModal}>
                    <img
                      src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      alt=""
                    />
                  </div>
                  <div className={styles.image_item} onClick={showPhotoModal}>
                    <img
                      src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      alt=""
                    />
                  </div>
                </>
              )}

              {index === 3 && (
                <>
                  <div
                    className={classnames(styles.image_item, styles.main_photo)}
                    onClick={showPhotoModal}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      alt=""
                    />
                  </div>
                  <div className={styles.image_item} onClick={showPhotoModal}>
                    <img
                      src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      alt=""
                    />
                  </div>
                  <div className={styles.image_item} onClick={showPhotoModal}>
                    <img
                      src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      alt=""
                    />
                  </div>
                  <div className={styles.image_item} onClick={showPhotoModal}>
                    <div className={styles.show_more}>
                      <span>+4</span>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      alt=""
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          <div className={styles.post_header}>
            <div className={styles.avatar}>
              <Avatar
                text="John Doe"
                url={
                  index === 0
                    ? null
                    : `https://api.adorable.io/avatars/50/adorable${
                        index + 5
                      }.png`
                }
                size={80}
                borderSize={3}
              />
            </div>

            <div className={styles.user_info}>
              <p className={styles.user_name}>John Doe</p>
            </div>
          </div>
          <p className={styles.date}>3 jun, 2020 - 10:30 AM</p>

          <p className={styles.description}>
            <TrimText limit={110}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </TrimText>
          </p>
          <Comments index={index} show={commentShow} />
          <Actions
            index={index}
            actions={{ toggleCommentShow, showCommentModal }}
          />
        </div>
      ))} */}
    </div>
  );
}
