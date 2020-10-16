import { useState } from 'react';
import styles from './styles/avatar.module.scss';

export default function Avatar({ text = '', url, size = 40, borderSize = 0 }) {
  // const [showAvatar, setShowAvatar] = useState(true);
  const textChar = text[0];
  // const charCodeStart = (textChar.charCodeAt() * (Math.random() * 255)) / 255;
  // const lastTextChar = text.slice(-1);
  // const charCodeEnd = (lastTextChar.charCodeAt() * (Math.random() * 255)) / 255;

  const onLoadImageError = function (response) {
    console.log('error', response);
  };

  const backgroundLinear = {
    // background: `linear-gradient(45deg, rgb(${charCodeStart}, ${charCodeStart}, ${charCodeStart}), rgb(${charCodeEnd}, ${charCodeEnd}, ${charCodeEnd}))`,
  };

  return (
    <div
      className={styles.avatar}
      style={{
        width: size,
        height: size,
        borderWidth: borderSize,
        ...(!url ? backgroundLinear : {}),
      }}
    >
      {url && <img src={url} alt="avatar" />}

      {!url && <span className={styles.name_char}>{textChar}</span>}
    </div>
  );
}
