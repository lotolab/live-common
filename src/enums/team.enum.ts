/**
 * 随队人员role
 *
 */
export enum TeamStaffRoleEnum {
  headCoach = 'headCoach',
  trainer = 'trainer',
  coach = 'coach',
  guide = 'guide',
  staff = 'staff',
  other = 'other',
}

export type TeamStaffRoleType = (typeof TeamStaffRoleEnum)[keyof typeof TeamStaffRoleEnum] | string;

export const fbTeamStaffRoles = [
  { id: 'headCoach', label: '主教练', sort: 1, value: TeamStaffRoleEnum.headCoach },
  { id: 'trainer', label: '助理教练', sort: 2, value: TeamStaffRoleEnum.trainer },
  { id: 'coach', label: '教练', sort: 3, value: TeamStaffRoleEnum.coach },
  { id: 'guide', label: '领队', sort: 4, value: TeamStaffRoleEnum.guide },
  { id: 'staff', label: '随队工作人员', sort: 5, value: TeamStaffRoleEnum.staff },
  { id: 'other', label: '其他人员', sort: 6, value: TeamStaffRoleEnum.other },
];
