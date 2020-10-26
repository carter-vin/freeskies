import React from 'react';
import classnames from 'classnames';
import styles from './styles/photo-section.module.scss';
import { Button } from 'antd';
import { useModal } from 'react-modal-hook';
import { useRouter } from 'next/router';
import PhotosModal from './PhotosModal';

export default function PhotoSection({ user }) {
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
        {user?.recentPhotos.map((item) => (
          <div className={styles.photo} onClick={showModal} key={item.id}>
            <img src={`https://freeskies.com/static/${item.src}`} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
