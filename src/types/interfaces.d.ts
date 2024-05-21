// 接口请求
export type ResType<T> = Promise<ResponseType<T>>;
export interface ResponseType<T> {
  status: number;
  data: any;
  message: string;
  msg: string;
  code: string | null | number;
}

// 签名配置
export interface RequestSignParams {
  baseUrl: string;
  appkey?: string;
  baseString?: string;
}