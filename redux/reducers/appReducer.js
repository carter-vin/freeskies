const initialState = {
  appName: 'freeskies',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case '@@UPDATE_APP':
      return { appName: action.payload };
    default:
      return state;
  }
};

export default appReducer;
