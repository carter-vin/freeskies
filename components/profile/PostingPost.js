import { Button, Tabs, Input } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { FileDrop } from 'components/forms';
import { message } from 'antd';

import styles from './styles/posting-post.module.scss';

const { TextArea } = Input;
const { TabPane } = Tabs;

export default function PostingPost({ onPosting, loading }) {
  const [text, setText] = useState('');
  const [files, setFiles] = useState([]);
  // const [activeType, setActiveType] = useState('text');

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleChangeTabActive = (activeKey) => {
    setActiveType(activeKey);
  };

  const handleSubmit = async () => {
    try {
      let dataForRequest;
      const formData = new FormData;

      for (var i = 0; i < files.length; i++) {
        if (files[i].type.split('/')[0] === 'image') {
          formData.append('images', files[i]);
        } else {
          formData.append('videos', files[i]);
        }
      }
      
      if (text.length !== 0) {
        formData.append('text', text)
      }
      
      dataForRequest = formData

      const response = await onPosting(dataForRequest);
      const { status, data } = response;

      if (status === 201) {
        message.success('Your post published successfuly');
        handleChangeFile([])
        setText('');
      } else {
        message.error(data?.message || 'Something wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeFile = (files) => {
    // console.log('onchangefile', files);
    setFiles(files);
  };

  return (
    <div className={styles.activity_posting}>
      <div>
        <TextArea
          value={text}
          onChange={handleChangeText}
          placeholder="Write a message"
          autoSize={{ minRows: 2, maxRows: 5 }}
        />

        <div className={styles.file_place}>
          <FileDrop files={files} onChange={handleChangeFile} />
        </div>
      </div>

      <div className={styles.actions_container}>
        <Button type="primary" loading={loading} onClick={handleSubmit}>
          Post
        </Button>
      </div>
    </div>
  );
}
