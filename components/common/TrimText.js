import { useState } from 'react';

export default function TrimText({ limit = 80, children }) {
  const [readMore, setReadMore] = useState(true);

  const handleToggle = () => setReadMore((state) => !state);

  let text = '';
  let trimText = text;

  try {
    text = children.toString();
    trimText = text.substr(0, readMore ? limit : text.length);
  } catch (error) {
    console.log(error);
  }

  return (
    <span>
      {trimText}{' '}
      {text.length > limit && (
        <span
          className="read-more-btn"
          onClick={handleToggle}
          style={{ cursor: 'pointer', color: '#2378f8' }}
        >
          {readMore ? 'Read more' : 'Read less'}
        </span>
      )}
    </span>
  );
}
