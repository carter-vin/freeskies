import { Button, Tabs, Input } from 'antd';
import { useRef } from 'react';
import { FileDrop } from 'components/forms';

import styles from './styles/posting-post.module.scss';

const { TextArea } = Input;
const { TabPane } = Tabs;

export default function PostingPost() {
  return (
    <div className={styles.activity_posting}>
      <Tabs defaultActiveKey="1" type="card" size={'small'}>
        <TabPane tab="Text message" key="1">
          <TextArea
            // value={value}
            // onChange={this.onChange}
            placeholder="Write a message"
            autoSize={{ minRows: 2, maxRows: 5 }}
          />
        </TabPane>
        <TabPane tab="Text with media" key="2">
          <TextArea
            // value={value}
            // onChange={this.onChange}
            placeholder="Write a message"
            autoSize={{ minRows: 2, maxRows: 5 }}
          />

          <div className={styles.file_place}>
            <FileDrop />
          </div>
        </TabPane>
      </Tabs>

      <div className={styles.actions_container}>
        <Button type="primary">Post</Button>
      </div>
    </div>
  );
}
