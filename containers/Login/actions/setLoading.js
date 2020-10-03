import { SET_LOADING } from '../storage/LoginContext';

const setLoading = (state) => {
  return {
    type: SET_LOADING,
    payload: state,
  };
};

export default setLoading;
