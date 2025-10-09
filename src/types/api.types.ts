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



/**
 *
 */
export interface UploadExtra {
  type: UploadType;
  basePrefix?: string;
  filename?: string;
  originFilename?: string;
  filepath?: string;
  ext?: string;
  [k: string]: any;
}

export interface UploadResponse {
  filename: string;
  originFilename: string;
  url: string;
  filepath: string;
  [k: string]: any;
}
