import ReactModal from 'react-modal';
import AliceCarousel from 'react-alice-carousel';
import styles from './styles/photos_modal.module.scss';
import PhotoModalWrapper from 'components/common/PhotoModalWrapper';
import { Rate } from 'antd';
import { useState } from 'react';
import {
  LeftCircleFilled,
  RightCircleFilled,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { RatingSlide } from 'components/forms';

export default function PhotosModal({ data, onRatePost, ...rest }) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const handleOnDragStart = (e) => e.preventDefault();

  const slideNext = () => setSliderIndex((state) => state + 1);
  const slidePrev = () => setSliderIndex((state) => state - 1);
  const onSlideChanged = (e) => setSliderIndex(e.item);

  const handleRatePhoto = (rate) => {
    onRatePost('Photo', data[sliderIndex].id, rate);
  };

  const roundRating = data.length !== 0 ? Math.round(data[sliderIndex]?.rating || 0) : 0

  return (
    <PhotoModalWrapper {...rest}>
      <div className={styles.container}>
        <div className={styles.actions}>
          <LeftOutlined
            className={styles.prev_action}
            onClick={() => slidePrev()}
          />
          <RightOutlined
            className={styles.next_action}
            onClick={() => slideNext()}
          />
        </div>
        <AliceCarousel
          mouseTrackingEnabled
          dotsDisabled
          buttonsDisabled
          slideToIndex={sliderIndex}
          onSlideChanged={onSlideChanged}
        >
          {data.map((item, index) => (
            <>
              {item !== undefined && item.src !== null && (
                <div className={styles.photo_container}>
                  <div className={styles.photo} key={index}>
                    <img
                      onDragStart={handleOnDragStart}
                      src={`https://www.freeskies.com/static/${item.src}`}
                      alt=""
                    />
                  </div>
                </div>
              )}
            </>
          ))}
        </AliceCarousel>

        {data.length !== 0 && (
          <div className={styles.rating_wrapper}>
            <RatingSlide
            defaultRate={roundRating}
            withoutText
            onChange={handleRatePhoto}
          />
          </div>
        )}
      </div>
    </PhotoModalWrapper>
  );
}

PhotosModal.defaultProps = {
  data: [],
}