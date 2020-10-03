import { SET_AUTHORIZATION } from '../storage/LoginContext';

const setAuthorization = (data) => {
  const modifyData = {
    token: data.token,
    refreshToken: data.refreshToken,
    userData: data.account,
  };

  return {
    type: SET_AUTHORIZATION,
    payload: modifyData,
  };
};

export default setAuthorization;
