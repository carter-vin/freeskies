import { StarFilled } from '@ant-design/icons';
import { useState } from 'react';
import classnames from 'classnames';
import styles from './styles/dragable-rating.module.scss';
import { Popover } from 'antd';
import RatingSlide from './RatingSlide';
import _ from 'lodash';

function convertRange(value, r1, r2) {
  return ((value - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0];
}

// convertRange(328.17, [300.77, 559.22], [1, 10]);

export default function DragableRating() {
  const [holdMouse, setHoldMouse] = useState(false);
  const [rate, setRate] = useState(0);

  const handleCancelRate = () => {
    setRate(0);
    setHoldMouse(false);
  };

  const onMouseUp = (e) => {
    e.preventDefault();
    // console.log('onMouseUp', e);
    setHoldMouse(false);
  };

  const onMouseHold = (e) => {
    e.preventDefault();
    // console.log('onMouseHold', e);
    setHoldMouse(true);
  };

  const onMouseMove = (e) => {
    if (holdMouse) {
      const { layerX, target } = e.nativeEvent;
      // touchevent variables
      let startElement, moveX;
      if (e.type === 'touchmove') {
        startElement =
          e.nativeEvent.targetTouches[0].target.offsetParent.offsetLeft;
        moveX = e.nativeEvent.targetTouches[0].clientX;
      }

      const value = e.type === 'touchmove' ? moveX - startElement : layerX;
      const rateCalculate =
        Math.round(
          convertRange(value, [20, target.offsetWidth - 20], [0, 5]) * 100
        ) / 100;

      let rateRountCalculate = Math.round(rateCalculate);

      if (rateRountCalculate < rateCalculate) {
        rateRountCalculate += 0.5;
      }
      if (rateCalculate < 0) {
        rateRountCalculate = 0;
      }
      if (rateCalculate > 5) {
        rateRountCalculate = 5;
      }

      setRate(Number(rateRountCalculate));
    }
  };

  return (
    <div className={styles.rate_container}>
      <div
        className={classnames(styles.dragable_area, {
          [styles.active]: holdMouse,
        })}
        onMouseDown={onMouseHold}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onTouchStart={onMouseHold}
        onTouchEnd={onMouseUp}
        onTouchMove={onMouseMove}
        onMouseLeave={handleCancelRate}
      />

      <div
        className={classnames(styles.popover, {
          [styles.active]: holdMouse,
        })}
      >
        <RatingSlide defaultRate={rate} dark size="medium" />
      </div>

      <div className={styles.rate}>
        <span className={styles.icon}>
          <StarFilled />
        </span>
        <span className={styles.rate_text}>4.5</span>
      </div>
    </div>
  );
}
