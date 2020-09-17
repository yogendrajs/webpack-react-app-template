const handleError = (err, dispatchFailure, dispatch) => {
  console.log(err);
  dispatchFailure(dispatch);
};

const asyncActionErrorHandler = (fn, dispatchFailure) => (dispatch) => {
  Promise.resolve(fn(dispatch)).catch((err) => handleError(err, dispatchFailure, dispatch));
};

export default asyncActionErrorHandler;
