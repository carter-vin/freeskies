import classnames from 'classnames';
import { useModal } from 'react-modal-hook';
import Header from 'components/header/Header';
import PhotosModal from 'components/profile/PhotosModal';
import styles from './styles/photos.module.scss';

export default function Photos() {
  const [showModal, hideModal] = useModal(({ in: open }) => (
    <PhotosModal title="Photo detail" showModal={open} onClose={hideModal} />
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
          {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((item, index) => (
            <div
              className={styles.photo_container}
              key={index}
              onClick={showModal}
            >
              <div className={styles.photo}>
                <img
                  src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
