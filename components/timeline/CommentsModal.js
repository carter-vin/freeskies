import AliceCarousel from 'react-alice-carousel';
import ModalWrapper from 'components/common/ModalWrapper';
import { useState } from 'react';
import {
  LeftCircleFilled,
  RightCircleFilled,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { RatingSlide } from 'components/forms';
import Comments from './Comments';

export default function CommentsModal({ ...rest }) {
  return (
    <ModalWrapper narrow_container {...rest}>
      <Comments />
    </ModalWrapper>
  );
}
