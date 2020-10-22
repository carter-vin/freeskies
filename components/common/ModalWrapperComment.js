import ReactModal from 'react-modal';
import { CloseOutlined, CloseCircleFilled } from '@ant-design/icons';
import styles from './styles/modal.module.scss';
import classnames from 'classnames';

const customStyles = {
  content: {
    // width: '50%',
    // left: '0',
    // right: '0',
    // margin: 'auto',
  },
  overlay: {
    backgroundColor: 'rgba(50, 50, 50, .8)',
  },
};

export default function ModalWrapperComment({
  children,
  narrow_container,
  title,
  show,
  handleHide,
  ...rest
}) {
  return (
    <ReactModal
      isOpen={show}
      style={customStyles}
      className={classnames(
        styles.modal_content,
        styles.modal_content_photo,
        styles.modal_content_comment,
        {
          [styles.narrow]: narrow_container,
        }
      )}
      shouldCloseOnOverlayClick
      onRequestClose={handleHide}
    >
      <div className={styles.header}>
        <button className={styles.close} type="button" onClick={handleHide}>
          <CloseOutlined />
        </button>
      </div>
      <div className={styles.content}>{children}</div>
    </ReactModal>
  );
}
