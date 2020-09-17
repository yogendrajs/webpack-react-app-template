const createRequestbody = (method, token, body) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With",
    "Content-Type": "application/json",
    "x-access-token": token,
  };

  let bodyData;
  if (body) {
    bodyData = JSON.stringify(body);
  }
  return {
    method,
    headers,
    body: bodyData,
  };
};

export default createRequestbody;
