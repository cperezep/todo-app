import { AxiosResponse, Method } from 'axios';
import axios from './axios';

function request<T>(method: Method, url: string, data?: any): Promise<AxiosResponse<T>> {
  return axios.request<T>({ method, url, data });
}

export default request;
