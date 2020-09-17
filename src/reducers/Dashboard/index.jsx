import {
  APP_DASHBOARD_REQUEST,
  APP_DASHBOARD_RESPONSE,
  APP_DASHBOARD_FAILURE,
} from "../../actions/types";

const initialState = {
  data: [],
};

const setRequest = () => {};

const setResponse = (state, action) => {
  const { data = [] } = action.payload;
  return {
    ...state,
    data,
  };
};

const setFailure = () => {};

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_DASHBOARD_REQUEST:
      return setRequest(state, action);

    case APP_DASHBOARD_RESPONSE:
      return setResponse(state, action);

    case APP_DASHBOARD_FAILURE:
      return setFailure(state, action);

    default:
      return state;
  }
};
