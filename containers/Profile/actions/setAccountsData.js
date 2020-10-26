import { SET_ACCOUNTS_DATA } from '../storage/ProfileContext';

const setAccountsData = (state) => {
  return {
    type: SET_ACCOUNTS_DATA,
    payload: state,
  };
};

export default setAccountsData;
