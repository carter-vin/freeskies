import React from 'react';
import { Button } from 'antd';
import classnames from 'classnames';
import RatingsList from './RatingsList';
import styles from './styles/rated-section.module.scss';

export default function RatedSection({ user, onRatePost }) {
  const ratings = user?.recentRated
  return (
    <div className={classnames(styles.container_bg, styles.section)}>
      <div className={styles.section_title}>
        <p>Rated</p>
        <Button type="link">My rates</Button>
      </div>
      {ratings && ratings.length !== 0 && (
        <RatingsList
          ratings={ratings}
          onRatePost={onRatePost}
        />
      )}
    </div>
  );
}
