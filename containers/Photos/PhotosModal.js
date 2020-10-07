import ReactModal from 'react-modal';

export default function PhotosModal({ showModal, onClose, onExited }) {
  console.warn(showModal, onClose);
  return (
    <ReactModal isOpen={showModal}>
      <p>Modal content</p>
      <button type="button" onClick={onClose}>
        Hide modal
      </button>
    </ReactModal>
  );
}
