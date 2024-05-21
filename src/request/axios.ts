import axios from 'axios';
import type { RequestSignParams } from '@/types/interfaces';
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

export default (params: RequestSignParams) => {
  // 判断是否为签名接口
  const signatureApi = params.appkey ? true : false;
  const instance: AxiosInstance = axios.create({
    baseURL: params.baseUrl,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    timeout: 60 * 1000,
    withCredentials: true,
  });

  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig<any>) => {
      // 对签名接口处理
      if (signatureApi) {
      }
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => {
      if (response.status !== 200) {
        return Promise.reject(response);
      }
      // 示例状态码
      if (signatureApi) {
        switch (response.data.status) {
          case 401:
            break;
          case 402:
            break;
          case 404:
            break;
        }
      } else {
        switch (response.data.status) {
          case 99:
            break;
          case 98:
            break;
        }
      }
      return Promise.resolve(response);
    },
    (error) => {
      // 示例状态码
      if (signatureApi) {
        switch (error?.response?.data?.status) {
          case 401:
            break;
          case 402:
            break;
          case 404:
            break;
        }
      } else {
        switch (error?.response?.data?.status) {
          case 99:
            break;
          case 98:
            break;
        }
      }
      return Promise.reject(error);
    },
  );

  return instance;
};
