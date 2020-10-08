import ReactModal from 'react-modal';
import AliceCarousel from 'react-alice-carousel';
import styles from './styles/photos_modal.module.scss';
import ModalWrapper from 'components/common/ModalWrapper';
import { Rate } from 'antd';
import { useState } from 'react';
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';

export default function PhotosModal({ ...rest }) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const handleOnDragStart = (e) => e.preventDefault();

  const slideNext = () => setSliderIndex((state) => state + 1);
  const slidePrev = () => setSliderIndex((state) => state - 1);
  const onSlideChanged = (e) => setSliderIndex(e.item);

  return (
    <ModalWrapper {...rest}>
      <div className={styles.container}>
        <div className={styles.actions}>
          <LeftCircleFilled
            className={styles.prev_action}
            onClick={() => slidePrev()}
          />
          <RightCircleFilled
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
              <div className={styles.rating}>
                <Rate
                  // disabled
                  allowHalf
                  defaultValue={3.5}
                  style={{ color: '#fadb14', fontSize: '1.2em' }}
                />
                <span className={styles.rating_text}>3.5</span>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </ModalWrapper>
  );
}
