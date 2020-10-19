import { SET_TIMELINE_DATA } from '../storage/TimelineContext';

const setTimelineData = (state) => {
  return {
    type: SET_TIMELINE_DATA,
    payload: state,
  };
};

export default setTimelineData;
