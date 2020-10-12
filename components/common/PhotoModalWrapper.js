import ReactModal from 'react-modal';
import { CloseOutlined, CloseCircleFilled } from '@ant-design/icons';
import styles from './styles/modal.module.scss';

const customStyles = {
  content: {},
  overlay: {
    backgroundColor: 'rgba(50, 50, 50, .8)',
  },
};

export default function PhotoModalWrapper({
  children,
  showModal,
  title,
  ...rest
}) {
  return (
    <ReactModal
      isOpen={showModal}
      style={customStyles}
      className={styles.modal_content_photo}
      shouldCloseOnOverlayClick
      onRequestClose={rest.onClose}
    >
      <div className={styles.header}>
        <button className={styles.close} type="button" onClick={rest.onClose}>
          <CloseOutlined />
        </button>
      </div>
      <div className={styles.content}>{children}</div>
    </ReactModal>
  );
}
