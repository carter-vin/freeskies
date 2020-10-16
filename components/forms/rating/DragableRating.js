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
      const { layerX, layerY, target } = e.nativeEvent;
      // console.log(
      //   'mousemove',
      //   layerX,
      //   layerY,
      //   target.offsetWidth,
      //   e.nativeEvent
      // );

      const rateCalculate = convertRange(
        layerX,
        [0, target.offsetWidth],
        [0, 5]
      ).toFixed(1);

      setRate(Number(rateCalculate));

      console.log(typeof rateCalculate);
    }
  };

  return (
    <Popover
      content={() => <RatingSlide defaultRate={rate} dark size="medium" />}
      // title="Title"
      placement="topLeft"
      trigger="click"
      visible={holdMouse}
      // onVisibleChange={handleRateVisibleToggle}
    >
      <div className={styles.rate_container}>
        <div
          className={classnames(styles.dragable_area, {
            [styles.active]: holdMouse,
          })}
          onMouseDown={onMouseHold}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        />
        <div className={styles.rate}>
          <span className={styles.icon}>
            <StarFilled />
          </span>
          <span className={styles.rate_text}>4.5</span>
        </div>
      </div>
    </Popover>
  );
}
