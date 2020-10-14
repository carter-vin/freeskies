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

export default function PhotosModal({ ...rest }) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const handleOnDragStart = (e) => e.preventDefault();

  const slideNext = () => setSliderIndex((state) => state + 1);
  const slidePrev = () => setSliderIndex((state) => state - 1);
  const onSlideChanged = (e) => setSliderIndex(e.item);

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
          {[0, 0, 0, 0, 0].map((item, index) => (
            <div className={styles.photo_container}>
              <div className={styles.photo} key={index}>
                <img
                  onDragStart={handleOnDragStart}
                  src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  alt=""
                />
              </div>
            </div>
          ))}
        </AliceCarousel>

        <div className={styles.rating_wrapper}>
          <RatingSlide />
        </div>
      </div>
    </PhotoModalWrapper>
  );
}
