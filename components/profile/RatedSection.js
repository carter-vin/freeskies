import React from 'react';
import classnames from 'classnames';
import { Button, Rate } from 'antd';
import styles from './styles/rated-section.module.scss';
import PhotosModal from './PhotosModal';
import { useModal } from 'react-modal-hook';

export default function RatedSection({ user }) {
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
        {user?.recentRated.map((item, index) => {
          return (
            <div className={styles.log_item} key={index}>
              <div className={styles.image} onClick={showModal}>
              <img src={`https://freeskies.com/static/${item.rated.src}`} alt="" />
              </div>
              <div className={styles.info}>
                <span className={styles.name}>{item.rated.caption}</span>
                <p className={styles.rating}>
                  <Rate
                    disabled
                    allowHalf
                    defaultValue={item.givenRating}
                    style={{ color: '#fadb14', fontSize: '1em' }}
                  />
                  <span className={styles.rating_text}>{item.givenRating}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
