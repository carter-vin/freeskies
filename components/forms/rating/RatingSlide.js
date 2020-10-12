import { Rate, Slider } from 'antd';
import { useState } from 'react';
import styles from './styles/rating.module.scss';

export default function RatingSlide() {
  const [rate, setRate] = useState(0);

  return (
    <div className={styles.rating}>
      <div className={styles.star_container}>
        <Rate
          disabled
          allowHalf
          value={rate}
          style={{ color: '#fadb14', fontSize: '1.2em' }}
        />

        <div className={styles.slider}>
          <Slider
            min={0}
            max={5}
            onChange={setRate}
            tooltipVisible={false}
            value={rate}
            step={0.5}
          />
        </div>
      </div>
      <span className={styles.rating_text}>{rate.toFixed(1)}</span>
    </div>
  );
}
