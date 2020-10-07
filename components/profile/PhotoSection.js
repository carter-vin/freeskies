import React from 'react';
import classnames from 'classnames';
import styles from './styles/photo-section.module.scss';
import { Button } from 'antd';
import { useModal } from 'react-modal-hook';
import { useRouter } from 'next/router';
import PhotosModal from './PhotosModal';

export default function PhotoSection() {
  const router = useRouter();
  const [showModal, hideModal] = useModal(({ in: open }) => (
    <PhotosModal title="Photo detail" showModal={open} onClose={hideModal} />
  ));

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

      <div className={classnames(styles.photos, styles.sections_content)}>
        {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((item, index) => (
          <div className={styles.photo} onClick={showModal}>
            <img
              src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
