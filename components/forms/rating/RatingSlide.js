import { Rate, Slider } from 'antd';
import { useEffect, useRef, useState } from 'react';
import styles from './styles/rating.module.scss';
import classnames from 'classnames';

export default function RatingSlide({ dark, size, defaultRate = 0, onChange }) {
  const sliderRef = useRef(null);

  const [rate, setRate] = useState(0);
  const [blockRequest, setBlockRequest] = useState(true);

  const handleChange = (value) => {
    setBlockRequest(false);
    setRate(value);
  };

  const handleChangeRate = () => {
    if (!blockRequest && onChange) onChange(rate);
    setBlockRequest(true);

    if (navigator.userAgent.toLowerCase().indexOf('firefox') > 0) {
      sliderRef.current.blur(); // fix mozilla problem
    }
  };

  useEffect(() => {
    setRate(defaultRate || 0);
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
            onChange={handleChange}
            tooltipVisible={false}
            onAfterChange={() => {
              handleChangeRate();
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
