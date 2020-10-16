import React from 'react';
import classnames from 'classnames';
import { Button, Rate } from 'antd';
import styles from './styles/rated-section.module.scss';
import PhotosModal from './PhotosModal';
import { useModal } from 'react-modal-hook';

export default function RatedSection() {
  const [showModal, hideModal] = useModal(({ in: open }) => (
    <PhotosModal title="Photo detail" showModal={open} onClose={hideModal} />
  ));

  return (
    <div className={classnames(styles.container_bg, styles.section)}>
      <div className={styles.section_title}>
        <p>Rated</p>
        <Button type="link">My rates</Button>
      </div>
      <div className={classnames(styles.my_rates)}>
        {[0, 0, 0, 0, 0].map((item, index) => {
          return (
            <div className={styles.log_item} key={index}>
              <div className={styles.image} onClick={showModal}>
                <img
                  src={`https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80`}
                  alt=""
                />
              </div>
              <div className={styles.info}>
                <span className={styles.name}>John Doe</span>
                <p className={styles.rating}>
                  <Rate
                    disabled
                    allowHalf
                    defaultValue={3.5}
                    style={{ color: '#fadb14', fontSize: '1em' }}
                  />
                  <span className={styles.rating_text}>3.5</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
