export enum ResourceTypeEnum {
  GLTF = 'GLTF',
  Texture = 'Texture',
  Font = 'Font',
  MMD = 'MMD',
  MTL = 'MTL',
  OBJ = 'OBJ',
  PCD = 'PCD',
  File = 'File',
  Image = 'Image',
  Object = 'Object',
  Material = 'Material',
  CubeTexture = 'CubeTexture',
  RGBELoader = 'RGBELoader',
  FBX = 'FBX',
}

export enum ResourceType {
  GLTFLoader = 'GLTF',
  TextureLoader = 'Texture',
  FontLoader = 'Font',
  MMDLoader = 'MMD',
  MTLLoader = 'MTL',
  OBJLoader = 'OBJ',
  PCDLoader = 'PCD',
  FileLoader = 'File',
  ImageLoader = 'Image',
  ObjectLoader = 'Object',
  MaterialLoader = 'Material',
  CubeTextureLoader = 'CubeTexture',
  RGBELoader = 'RGBELoader',
  FBXLoader = 'FBX',
  ScatterLoader = 'JSONObject',
}

/**
 *
 * @param key
 * @returns ResourceType | undefined
 */
export function getReourceType(key: string): ResourceType | undefined {
  const entry = Object.entries(ResourceType).find(([k, _v]) => k === key);

  return entry ? (entry[1] as ResourceType) : undefined;
}
/**
 *
 * @param value
 * @returns ResourceType | undefined
 */
export function getReourceTypeByValue(value: string): ResourceType | undefined {
  const validValues = Object.values(ResourceType).filter((v) => typeof v === 'string') as string[];

  return validValues.includes(value) ? (value as ResourceType) : undefined;
}
