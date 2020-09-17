import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

// analytics middleware
// import analyticsMiddleware from "../_middlewares/analyticsMiddleware/analyticsMiddleware";

const middleware = [thunk];

export default () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middleware),
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
  );

  // initialize saga
  // sagaMiddleware.run(rootSaga);
  return store;
};

/**
 *
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 */
