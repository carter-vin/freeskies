const reduxStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === '@@redux/INIT') {
    console.log('!! @@redux/INIT');
  }
  return next(action);
};

export default reduxStorageMiddleware;
