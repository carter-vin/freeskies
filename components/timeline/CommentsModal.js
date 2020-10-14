import ModalWrapper from 'components/common/ModalWrapper';
import Comments from './Comments';

export default function CommentsModal({ ...rest }) {
  return (
    <ModalWrapper narrow_container {...rest}>
      <Comments />
    </ModalWrapper>
  );
}
