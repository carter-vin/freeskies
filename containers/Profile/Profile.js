import styles from './styles/profile.module.scss';
import classnames from 'classnames';
import { CameraOutlined } from '@ant-design/icons';
import { Button, Input, Tabs, Rate } from 'antd';
import PhotoSection from 'components/profile/PhotoSection';
import FeedPosts from 'components/profile/FeedPosts';
import PostingPost from 'components/profile/PostingPost';

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
        >
          <div className={styles.change_cover}>
            <Button ghost type="dashed">
              Change cover
            </Button>
          </div>
        </div>

        <div className={styles.profile}>
          <div className={styles.avatar}>
            <div className={styles.avatar_image}>
              <img
                src="https://api.adorable.io/avatars/128/adorable.png"
                alt="avatar"
              />
            </div>
            <div className={styles.change_avatar}>
              <CameraOutlined className={styles.change_avatar_image} />
            </div>
          </div>

          <div className={styles.user_content}>
            <div className={styles.user_info}>
              <div className={styles.heade_section}>
                <div className={styles.left_side}>
                  <p className={styles.fullname}>
                    <span>John Doe</span>
                  </p>
                </div>
                <div className={styles.right_side}>
                  <p className={styles.rating}>
                    <Rate
                      disabled
                      allowHalf
                      defaultValue={3.5}
                      style={{ color: '#fadb14', fontSize: '1em' }}
                    />
                    <span className={styles.rating_text}>3.5</span>
                  </p>
                </div>
              </div>
              {/* ==== */}
            </div>
            <div className={styles.bottom_section}>
              <div className={styles.left_side}>
                <div className={styles.user_actions}>
                  <div className={styles.follow_actions}>
                    <p className={styles.followers}>130 followers</p>
                  </div>
                  <p className={styles.followers_formobile}>
                    130 followers / 232 following
                  </p>
                </div>
              </div>
              <div className={styles.right_side}>
                <div className={styles.user_actions}>
                  <p className={styles.followers}>232 following</p>
                  <Button type="primary" shape="round" size="large">
                    Follow
                  </Button>
                  <Button type="primary" shape="round" size="large">
                    Edit profile
                  </Button>
                </div>
              </div>
            </div>
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
          <PhotoSection />
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
          <PostingPost />
          <FeedPosts />
        </div>
      </div>
    </div>
  );
}
