import axios from "axios";

const AxiosInterceptor = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 15000,
});

// request interceptors
AxiosInterceptor.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// response interceptors
AxiosInterceptor.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const status = error.response.status;
    switch (status) {
      // authentication (token related issues)
      case 401: {
        return Promise.reject(error);
      }

      // forbidden (permission related issues)
      case 403: {
        return Promise.reject(error);
      }

      // bad request
      case 400: {
        return Promise.reject(error);
      }

      // not found
      case 404: {
        return Promise.reject(error);
      }

      // conflict
      case 409: {
        return Promise.reject(error);
      }

      // unprocessable
      case 422: {
        return Promise.reject(error);
      }

      // generic  error (server related) unexpected
      default: {
        return Promise.reject(error);
      }
    }
  }
);

export default AxiosInterceptor;
