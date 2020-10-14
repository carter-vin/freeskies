import { useState } from 'react';

export default function TrimText({ limit = 80, children }) {
  const [readMore, setReadMore] = useState(true);

  const handleToggle = () => setReadMore((state) => !state);

  const text = children.toString();
  let trimText = text;

  try {
    trimText = text.substr(0, readMore ? limit : text.length);
  } catch (error) {
    console.log(error);
  }

  return (
    <span>
      {trimText}{' '}
      <span
        className="read-more-btn"
        onClick={handleToggle}
        style={{ cursor: 'pointer', color: '#2378f8' }}
      >
        {readMore ? 'Read more' : 'Read less'}
      </span>
    </span>
  );
}
