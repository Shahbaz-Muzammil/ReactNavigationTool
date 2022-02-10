import axios from "axios";

export const apiService = async (url, method, header, request) => {
  return request
    ? axios({
        url: url,
        method: method,
        headers: header,
        data: request,
      })
    : axios({
        url: url,
        method: method,
        headers: header,
        data: {},
      });
};
export const getApiDetails = () => {
  const headers = { "Content-Type": "application/json" };
  return apiService(`http://localhost:3000/products`, "GET", headers, {});
};
export const postApiDetails = (requestPayload) => {
  const headers = { "Content-Type": "application/json" };
  return apiService(
    `http://localhost:3000/products`,
    "POST",
    headers,
    requestPayload
  );
};
export const putApiDetails = (id, requestPayload) => {
  const headers = { "Content-Type": "application/json" };
  return apiService(
    `http://localhost:3000/products/${id}`,
    "PUT",
    headers,
    requestPayload
  );
};
export const deleteApiDetails = (id) => {
  const headers = { "Content-Type": "application/json" };
  return apiService(
    `http://localhost:3000/products/${id}`,
    "DELETE",
    headers,
    {}
  );
};
