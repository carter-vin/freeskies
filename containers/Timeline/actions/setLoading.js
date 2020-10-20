import { SET_LOADING, SET_POSTING_LOADING } from '../storage/TimelineContext';

function getLoadingType(type) {
  switch (type) {
    case 'timeline':
      return SET_LOADING;
    case 'posting':
      return SET_POSTING_LOADING;
    default:
      return '';
  }
}

/**
 *
 * @param  {boolean} state
 * @param  {string} type ["timeline", "posting"]
 * @return
 */
const setLoading = (state, type = 'timeline') => {
  return {
    type: getLoadingType(type),
    payload: state,
  };
};

export default setLoading;
