import ModalWrapperComment from 'components/common/ModalWrapperComment';
import Comments from './Comments';

export default function CommentsModal({ ...rest }) {
  return (
    <ModalWrapperComment narrow_container {...rest}>
      <Comments modalMode />
    </ModalWrapperComment>
  );
}
