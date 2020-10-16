import { Rate, Slider } from 'antd';
import { useEffect, useRef, useState } from 'react';
import styles from './styles/rating.module.scss';
import classnames from 'classnames';

export default function RatingSlide({ dark, size, defaultRate = 0 }) {
  const sliderRef = useRef(null);

  const [rate, setRate] = useState(0);

  useEffect(() => {
    setRate(defaultRate);
  }, [defaultRate]);

  return (
    <div
      className={classnames(styles.rating, {
        [styles.dark]: dark,
        [styles[size]]: size,
      })}
    >
      <div className={styles.star_container}>
        <Rate
          disabled
          allowHalf
          value={rate}
          style={{ color: '#fadb14', fontSize: '1.2em' }}
        />

        <div className={styles.slider}>
          <Slider
            ref={sliderRef}
            min={0}
            max={5}
            onChange={setRate}
            tooltipVisible={false}
            onAfterChange={() => {
              sliderRef.current.blur(); // fix mozilla problem
            }}
            value={rate}
            step={0.5}
          />
        </div>
      </div>
      <span className={styles.rating_text}>{rate.toFixed(1)}</span>
    </div>
  );
}
