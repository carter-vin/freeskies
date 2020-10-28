import React from 'react';
import { Button } from 'antd';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import PhotoList from './PhotoList'
import styles from './styles/photo-section.module.scss';

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
        <PhotoList
          images={images}
          onRatePost={onRatePost}
        />
      )}
    </div>
  );
}
