import { Button, Tabs, Input } from 'antd';
import { useRef, useState } from 'react';
import { FileDrop } from 'components/forms';
import { message } from 'antd';

import styles from './styles/posting-post.module.scss';

const { TextArea } = Input;
const { TabPane } = Tabs;

export default function PostingPost({ onPosting, loading }) {
  const [text, setText] = useState('');
  const [activeType, setActiveType] = useState('text');

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleChangeTabActive = (activeKey) => {
    setActiveType(activeKey);
  };

  const handleSubmit = async () => {
    try {
      const response = await onPosting(text, activeType);
      const { status, data } = response;

      if (status === 201) {
        message.success('Your post published successfuly');
        setText('');
      } else {
        message.error(data?.message || 'Something wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.activity_posting}>
      <Tabs
        onChange={handleChangeTabActive}
        activeKey={activeType}
        type="card"
        size={'small'}
      >
        <TabPane tab="Text message" key="text">
          <TextArea
            value={text}
            onChange={handleChangeText}
            placeholder="Write a message"
            autoSize={{ minRows: 2, maxRows: 5 }}
          />
        </TabPane>
        <TabPane tab="Text with media" key="textMedia">
          <TextArea
            value={text}
            onChange={handleChangeText}
            placeholder="Write a message"
            autoSize={{ minRows: 2, maxRows: 5 }}
          />

          <div className={styles.file_place}>
            <FileDrop />
          </div>
        </TabPane>
      </Tabs>

      <div className={styles.actions_container}>
        <Button type="primary" loading={loading} onClick={handleSubmit}>
          Post
        </Button>
      </div>
    </div>
  );
}
