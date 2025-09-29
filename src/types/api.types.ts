export interface UploadFileItem {
  name: string;
  ext?: string;
  value: string | Blob;
}

/**
 * API response standard
 * code 0 or 200 is success ,other if biz fail
 *
 */
export type ResponseData<T = any> = {
  code: number | undefined;
  message: string;
  result: T;
  [k: string]: any;
};
