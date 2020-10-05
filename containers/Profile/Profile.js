import styles from './styles/profile.module.scss';
import classnames from 'classnames';
import { StarFilled, LikeFilled, MessageFilled } from '@ant-design/icons';
import { Button, Input, Tabs, Rate } from 'antd';

const { TextArea } = Input;
const { TabPane } = Tabs;

export default function Profile() {
  return (
    <div>
      <div className={classnames(styles.container, styles.user_profile)}>
        <div
          className={styles.cover}
          style={{
            backgroundImage:
              'url(https://www.sleekcover.com/covers/water-drops-on-plant-facebook-cover.jpg)',
          }}
        ></div>

        <div className={styles.profile}>
          <div className={styles.avatar}>
            <img
              src="https://api.adorable.io/avatars/128/adorable.png"
              alt="avatar"
            />
          </div>

          <div className={styles.user_info}>
            <p className={styles.fullname}>
              <span>John Doe</span>
            </p>
            <p className={styles.rating}>
              <Rate
                disabled
                allowHalf
                defaultValue={3.5}
                style={{ color: '#fca652', fontSize: '1em' }}
              />
              <span className={styles.rating_text}>3.5</span>
            </p>
            <p className={styles.followers}>232 following / 130 followers</p>
          </div>

          <div className={styles.user_actions}>
            <Button type="primary" shape="round">
              Follow
            </Button>
            <Button type="primary" shape="round">
              Edit profile
            </Button>
          </div>
        </div>
      </div>

      <div
        className={classnames(
          styles.container,
          styles.content,
          styles.container_bg
        )}
      >
        <div className={styles.profile_contents}>
          <div className={classnames(styles.container_bg, styles.section)}>
            <div className={styles.section_title}>
              <p>Recent photos</p>
              <Button type="link">All photos</Button>
            </div>

            <div className={classnames(styles.photos, styles.sections_content)}>
              {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((item, index) => (
                <div className={styles.photo}>
                  <img
                    src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={classnames(styles.container_bg, styles.section)}>
            <div className={styles.section_title}>
              <p>Friends</p>
              <Button type="link">All friends</Button>
            </div>
            <div
              className={classnames(
                styles.friends_list,
                styles.sections_content
              )}
            >
              {[0, 0, 0, 0, 0, 0, 0, 0].map((item, index) => {
                return (
                  <div className={styles.friend} key={index}>
                    <div className={styles.avatar}>
                      <img
                        src={`https://api.adorable.io/avatars/128/adorable${index}.png`}
                        alt=""
                      />
                    </div>
                    <div className={styles.friend_name}>
                      <span>John Doe</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={classnames(styles.container_bg, styles.section)}>
            <div className={styles.section_title}>
              <p>Rated</p>
              <Button type="link">My rates</Button>
            </div>
            <div
              className={classnames(
                styles.friends_list,
                styles.sections_content
              )}
            >
              {[0, 0, 0, 0, 0, 0, 0, 0].map((item, index) => {
                return (
                  <div className={styles.friend} key={index}>
                    <div className={styles.avatar}>
                      <img
                        src={`https://api.adorable.io/avatars/128/adorable${
                          index + 1
                        }.png`}
                        alt=""
                      />
                    </div>
                    <div className={styles.friend_name}>
                      <span>John Doe</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.activity}>
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
              </TabPane>
            </Tabs>

            <div className={styles.actions_container}>
              <Button type="primary">Post</Button>
            </div>
          </div>
          <div className={styles.activity_content}>
            {[0, 0, 0, 0].map((item, index) => (
              <div className={styles.post}>
                <div className={styles.post_header}>
                  <div className={styles.avatar}>
                    <img
                      src={`https://api.adorable.io/avatars/50/adorable${
                        index + 5
                      }.png`}
                      alt="avatar"
                    />
                  </div>
                  <div className={styles.user_info}>
                    <p className={styles.user_name}>John Doe</p>
                    <p className={styles.date}>3 jun, 2020 - 10:30 AM</p>
                  </div>
                </div>
                <div className={styles.post_content}>
                  <p className={styles.description}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                  <div className={styles.image}>
                    <img
                      src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      alt=""
                    />
                  </div>
                </div>
                <div className={styles.post_actions}>
                  <div>
                    <LikeFilled />
                    <span>Like</span>
                  </div>
                  <div>
                    <MessageFilled />
                    <span>Comment</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
