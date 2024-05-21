import instance from '@/request/axios';
import type { AxiosRequestConfig } from 'axios';
import type { RequestSignParams, ResType } from '@/types/interfaces';

export default (params: RequestSignParams) => {
  const axios = instance(params);
  async function get<T, R = T>(
    url: string,
    data?: R,
    config?: AxiosRequestConfig,
  ): Promise<ResType<T>> {
    try {
      const response = await axios.get<ResType<T>>(url, {
        params: data || {},
        ...config,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async function post<T, R = T>(
    url: string,
    data?: R,
    config?: AxiosRequestConfig,
  ): Promise<ResType<T>> {
    try {
      const response = await axios.post<ResType<T>>(url, data || {}, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  return { get, post };
};
