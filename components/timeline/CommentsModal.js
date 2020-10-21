import { connectModal } from 'redux-modal';
import ModalWrapperComment from 'components/common/ModalWrapperComment';
import Comments from './Comments';

function CommentsModal({ postData, activePostId, onUpdateTimeline, ...rest }) {
  const data = postData.filter((d) => d.id)[0];
  console.log('@===', postData, activePostId, data);
  return (
    <ModalWrapperComment narrow_container {...rest}>
      <Comments
        modalMode
        id={data?.id}
        type={data?.type}
        onUpdateTimeline={onUpdateTimeline}
        data={data?.comments}
      />
    </ModalWrapperComment>
  );
}

export default connectModal({ name: 'commentModal' })(CommentsModal);
