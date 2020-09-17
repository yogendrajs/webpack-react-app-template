import {
  // APP_DASHBOARD_REQUEST,
  APP_DASHBOARD_RESPONSE,
  APP_DASHBOARD_FAILURE,
} from "../types";
import asyncActionErrorHandler from "../../utils/asyncActionErrorHandler";
// import query from "../../utils/_query";

// const dispatchRequest = (dispatch, payload) =>
//   dispatch({
//     type: APP_DASHBOARD_REQUEST,
//     payload,
//   });

const dispatchResponse = (dispatch, payload) => {
  dispatch({
    type: APP_DASHBOARD_RESPONSE,
    payload,
  });
};

const dispatchFailure = (dispatch, payload) => {
  dispatch({
    type: APP_DASHBOARD_FAILURE,
    payload,
  });
};

const getResults = () => asyncActionErrorHandler(async (dispatch) => {
  // const requestTime = Date.now();

  const url = `https://jsonplaceholder.typicode.com/posts`;
  let result = await fetch(url);
  // let result = await query(url, token);
  result = await result.json();
  dispatchResponse(dispatch, { data: result });

  // const responseTime = Date.now();
  // let TimeTaken = (responseTime - requestTime) / 1000;
  // const RequestTime = new Date().toTimeString();
  // const ResponseTime = new Date().toTimeString();
  // TimeTaken = `${TimeTaken} seconds`;
}, dispatchFailure);

export default getResults;
