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
import { show } from 'redux-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function TimelinePosts({ data, onUpdateTimeline, onRatePost, modalActions }) {
  const imagesList = [].concat.apply([], data.map(item => item.images))
  const [activePostId, setActivePostId] = useState(null);
  const [showPhotoModal, hidePhotoModal] = useModal(({ in: open }) => (
    <PhotosModal
      title="Photo detail"
      showModal={open}
      onClose={hidePhotoModal}
      onRatePost={onRatePost}
      data={imagesList}
    />
  ));

  const handleShowCommentModal = (selectedPost) => {
    setActivePostId(selectedPost.id);
    modalActions.show('commentModal', { foo: 'bar' });
  };

  const toggleCommentShow = (index) =>
    setCommentShow(commentShow === index ? null : index);

  return (
    <div className={styles.activity_content}>
      {data.map((item, index) => {
        const { account, createdAt, type, comments, text, images, videos } = item;
        const profileUrl = account !== null && account !== undefined ? `${account.profilePhoto?.src}` : null
        const fullName = `${account?.firstName} ${account?.lastName}`;
        return (
          <div className={styles.post} key={item.id}>
            {images && images.length > 0 ? (
              <div className={styles.post_content}>
                <div
                  className={classnames(styles.image, {
                    [styles.grid_2]: images.length == 2,
                    [styles.grid_3]: images.length == 3,
                    [styles.grid_4]: images.length == 4,
                  })}
                >
                  {images.length == 1 && (
                    <div className={styles.image_item} onClick={showPhotoModal}>
                      <img src={`https://www.freeskies.com/static/${images[0].src}`} alt="" />
                    </div>
                  )}

                  {images.length == 2 && (
                    <>
                      <div
                        className={classnames(styles.image_item, styles.main_photo)}
                        onClick={showPhotoModal}
                      >
                        <img src={`https://www.freeskies.com/static/${images[0].src}`} alt="" />
                      </div>
                      <div className={styles.image_item} onClick={showPhotoModal}>
                        <img src={`https://www.freeskies.com/static/${images[1].src}`} alt="" />
                      </div>
                    </>
                  )}

                  {images.length == 3 && (
                    <>
                      <div
                        className={classnames(styles.image_item, styles.main_photo)}
                        onClick={showPhotoModal}
                      >
                        <img src={`https://www.freeskies.com/static/${images[0].src}`} alt="" />
                      </div>
                      <div className={styles.image_item} onClick={showPhotoModal}>
                        <img src={`https://www.freeskies.com/static/${images[1].src}`} alt="" />
                      </div>
                      <div className={styles.image_item} onClick={showPhotoModal}>
                        <img src={`https://www.freeskies.com/static/${images[2].src}`} alt="" />
                      </div>
                    </>
                  )}

                  {images.length >= 4 && (
                    <>
                      <div
                        className={classnames(styles.image_item, styles.main_photo)}
                        onClick={showPhotoModal}
                      >
                        <img src={`https://www.freeskies.com/static/${images[0].src}`} alt="" />
                      </div>
                      <div className={styles.image_item} onClick={showPhotoModal}>
                        <img src={`https://www.freeskies.com/static/${images[1].src}`} alt="" />
                      </div>
                      <div className={styles.image_item} onClick={showPhotoModal}>
                        <img src={`https://www.freeskies.com/static/${images[2].src}`} alt="" />
                      </div>
                      <div className={styles.image_item} onClick={showPhotoModal}>
                        <div className={styles.show_more}>
                          <span>+4</span>
                        </div>
                        <img src={`https://www.freeskies.com/static/${images[3].src}`} alt="" />
                      </div>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div style={{ height: 50 }} />
            )}
            <div className={styles.post_header}>
              <div className={styles.avatar}>
                <Avatar
                  text={fullName}
                  url={profileUrl}
                  size={80}
                  borderSize={3}
                />
              </div>

              <div className={styles.user_info}>
                <p className={styles.user_name}>{fullName}</p>
              </div>
            </div>
            <p className={styles.date}>
              {moment(createdAt).format('MMM DD, YYYY - HH:mm A')}
            </p>

            <p className={styles.description}>
              <TrimText limit={110}>
                {text}
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

      <CommentsModal
        activePostId={activePostId}
        postData={data}
        onUpdateTimeline={onUpdateTimeline}
        title="Comments"
        // showModal={open}
        // onClose={hideCommentModal}
      />
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

const mapDispatchToProps = (dispatch) => ({
  modalActions: bindActionCreators({ show }, dispatch),
});

export default connect(null, mapDispatchToProps)(TimelinePosts);
