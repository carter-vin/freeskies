import ModalWrapperComment from 'components/common/ModalWrapperComment';
import Comments from './Comments';

export default function CommentsModal({ postData, onUpdateTimeline, ...rest }) {
  return (
    <ModalWrapperComment narrow_container {...rest}>
      <Comments
        modalMode
        id={postData?.id}
        type={postData?.type}
        onUpdateTimeline={onUpdateTimeline}
        data={postData?.comments}
      />
    </ModalWrapperComment>
  );
}
