import React from 'react';
import classnames from 'classnames';
import { useModal } from 'react-modal-hook';
import PhotosModal from './PhotosModal';
import styles from './styles/photos_modal.module.scss';

const ImageList = ({ images, onRatePost }) => {
  const [showModal, hideModal] = useModal(({ in: open }) => (
    <PhotosModal
      title="Photo detail"
      showModal={open}
      onClose={hideModal}
      data={images}
      onRatePost={onRatePost}
    />
  ));

  return (
    <div className={classnames(styles.photos, styles.sections_content)}>
      {images.map((item) => (
        <div className={styles.photo} onClick={showModal} key={item.id}>
          <img src={`https://www.freeskies.com/static/${item.src}`} alt="" />
        </div>
      ))}
    </div>
  )
}

export default ImageList