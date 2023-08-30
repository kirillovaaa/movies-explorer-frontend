const getResponseData = async (...request) => {
  try {
    const res = await fetch(...request);
    const resBody = await res.json();
    if (res.ok) {
      return resBody;
    } else {
      return Promise.reject({ status: res.status, ...resBody });
    }
  } catch (e) {
    return Promise.reject(e);
  }
};

export default getResponseData;
