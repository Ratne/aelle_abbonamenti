import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import httpData from "./httpData";


export interface HttpCall {
  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R>;
  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R>;
  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R>;
  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R>;
  patch<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R>;
}

export interface HttpCallData {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
  put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
  patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
}

const getUrl: (url: string) => string = (url) => {
  return url.startsWith("http") ? url : httpData.url + url;
};

const http: HttpCallData = {
  get: (url, config) =>
    httpBase.get(url, config).then((res) => res.data),
  post: (url, data, config) =>
    httpBase.post(url, data, config).then((res) => res.data),
  put: (url, data, config) =>
    httpBase.put(url, data, config).then((res) => res.data),
  patch: (url, data, config) =>
    httpBase.patch(url, data, config).then((res) => res.data),
  delete: (url, config) =>
    httpBase.delete(url, config).then((res) => res.data),
};

export const httpBase: HttpCall = {
  get: (url, config) => axios.get(getUrl(url), config),
  post: (url, data, config) => axios.post(getUrl(url), data, config),
  put: (url, data, config) => axios.put(getUrl(url), data, config),
  patch: (url, data, config) => axios.patch(getUrl(url), data, config),
  delete: (url, config) => axios.delete(getUrl(url), config),
};
export default http;
