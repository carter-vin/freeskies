import { SET_LOADING } from '../storage/ProfileContext';

function getLoadingType(type) {
  switch (type) {
    case 'profile':
      return SET_LOADING;
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
const setLoading = (state, type = 'profile') => {
  return {
    type: getLoadingType(type),
    payload: state,
  };
};

export default setLoading;
