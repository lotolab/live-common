export enum GenderEnum {
  male = 'male',
  female = 'female',
}

/**
 *
 */
export enum UserRoleEnum {
  User = 'User', // 普通人员
  Producer = 'Producer', //监制
  Commentator = 'Commentator', // 解说员
  Technical = 'Technical', // 技术保证
  Screener = 'Screener', // 大屏操作员
}

export const genderOptions = [
  {
    id: 1,
    label: '男',
    value: 'male',
  },
  {
    id: 2,
    label: '女',
    value: 'female',
  },
];
