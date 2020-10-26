import { SET_FRIENDS_DATA } from '../storage/ProfileContext';

const setFriendsData = (state) => {
  return {
    type: SET_FRIENDS_DATA,
    payload: state,
  };
};

export default setFriendsData;
