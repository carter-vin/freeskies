import React from 'react';
import { Rate } from 'antd';
import classnames from 'classnames';
import { useModal } from 'react-modal-hook';
import PhotosModal from './PhotosModal';
import styles from './styles/rated-section.module.scss';

const RatingList = ({ ratings, onRatePost }) => {
  const [showModal, hideModal] = useModal(({ in: open }) => (
    <PhotosModal
      title="Photo detail"
      showModal={open}
      onClose={hideModal}
      data={ratings}
      onRatePost={onRatePost}
    />
  ));

  return (
    <div className={classnames(styles.my_rates)}>
        {ratings.map((item, index) => {
          return (
            <div className={styles.log_item} key={index}>
              <div className={styles.image} onClick={showModal}>
              <img src={`https://www.freeskies.com/static/${item.rated?.src}`} alt="" />
              </div>
              <div className={styles.info}>
                <span className={styles.name}>{item.rated?.caption}</span>
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
  )
}

export default RatingList