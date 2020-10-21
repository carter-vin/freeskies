import ReactModal from 'react-modal';
import { CloseOutlined, CloseCircleFilled } from '@ant-design/icons';
import styles from './styles/modal.module.scss';
import classnames from 'classnames';

ReactModal.setAppElement('#modal_place');

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

export default function ModalWrapper({
  children,
  showModal,
  narrow_container,
  title,
  ...rest
}) {
  return (
    <ReactModal
      isOpen={showModal}
      style={customStyles}
      className={classnames(styles.modal_content, {
        [styles.narrow]: narrow_container,
      })}
      shouldCloseOnOverlayClick
      onRequestClose={rest.onClose}
    >
      <div className={styles.header}>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
        <button className={styles.close} type="button" onClick={rest.onClose}>
          <CloseCircleFilled />
        </button>
      </div>
      <div className={styles.content}>{children}</div>
    </ReactModal>
  );
}
