import classnames from 'classnames';
import { useModal } from 'react-modal-hook';
import Header from 'components/header/Header';
import PhotosModal from 'components/profile/PhotosModal';
import styles from './styles/photos.module.scss';
import requireAuth from 'helpers/hoc/requireAuth';

function Photos({ auth: { user } }) {
  const [showModal, hideModal] = useModal(({ in: open }) => (
    <PhotosModal
      title="Photo detail"
      showModal={open}
      onClose={hideModal}
      data={user?.recentPhotos}
    />
  ));

  return (
    <div>
      <Header withoutSearch />
      <div
        className={classnames(
          styles.container,
          styles.container_bg,
          styles.container_radius
        )}
      >
        <div className={styles.page_title}>Photos</div>

        <div className={styles.content}>
          {user?.recentPhotos.map((item) => (
            <div
              className={styles.photo_container}
              key={item.id}
              onClick={showModal}
            >
              <div className={styles.photo}>
                <img src={item.src} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default requireAuth(Photos);
