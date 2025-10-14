export type UploadType = 'deffiles' | 'logos' | 'avatar' | 'icons' | string;

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

export interface UploadedFile {
  uuid: string;
  filename: string;
  originalname: string;
  category: string;
  url: string;
  filepath: string;
  mimetype?: string;
  [k: string]: any;
}

/**
 * 文件上传 FormData
 */
export interface UploadFormData {
  scope: string;
  category: string;
  [k: string]: any;
}
