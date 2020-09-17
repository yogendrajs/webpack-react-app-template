import createRequestBody from "./createRequestBody";

const query = async (url, token, method = "GET", requestBody) => {
  try {
    const body = createRequestBody(method, token, requestBody);
    return fetch(url, body);
  } catch (err) {
    return err;
  }
};

export default query;
