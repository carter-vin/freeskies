import React from 'react';
import classnames from 'classnames';
import { Button } from 'antd';
import { useModal } from 'react-modal-hook';
import { useRouter } from 'next/router';
import PhotosModal from './PhotosModal';
import styles from './styles/photo-section.module.scss';

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

export default function PhotoSection({ user, onRatePost }) {
  const router = useRouter();
  const images = user?.recentPhotos

  const goToPhotos = () => {
    router.push('/photos');
  };
  return (
    <div className={classnames(styles.container_bg, styles.section)}>
      <div className={styles.section_title}>
        <p>Recent photos</p>
        <Button type="link" onClick={goToPhotos}>
          All photos
        </Button>
      </div>
      {images && images.length !== 0 && (
        <ImageList
          images={images}
          onRatePost={onRatePost}
        />
      )}
    </div>
  );
}
