import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  config.headers['X-Api-Key'] = process.env.REACT_APP_API_KEY;
  // eslint-disable-next-line no-console
  console.info(`[request] [${JSON.stringify(config)}]`);
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  // eslint-disable-next-line no-console
  console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  // eslint-disable-next-line no-console
  console.info(`[response] [${JSON.stringify(response)}]`);
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  // eslint-disable-next-line no-console
  console.error(`[response error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

axios.interceptors.request.use(onRequest, onRequestError);
axios.interceptors.response.use(onResponse, onResponseError);

export default axios;
