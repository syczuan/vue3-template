import requestMethod from '@/request/requestMethod';
import type { ResType } from '@/types/interfaces';
const { get, post } = requestMethod({
  baseUrl: import.meta.env.VITE_B_BASE_URL,
  appkey: import.meta.env.VITE_B_BASE_APPKEY,
  baseString: import.meta.env.VITE_B_BASE_SGIN,
});

// 示例接口
export const getBTestApi = <T>(data: T): Promise<ResType<T>> => {
  return post('api/xxx', data);
};
