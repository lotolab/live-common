import { ToolkitSetting } from 'src/types';

export enum KitPositionEnum {
  leftTopPosition = 'LTP',
  rightTopPosition = 'RTP',
  leftBottomPosition = 'LBP',
  rightBottomPosition = 'RBP',
  CenterBottomPosition = 'CBP',
  MiddleCenterPosition = 'MCP',
  CenterTopPosition = 'CTP',
}

export enum ToolkitNameEnum {
  LeftTopScores = 'LeftTopScores',
  RightTopTime = 'RightTopTime',
  LeftInfoPannel = 'LeftInfoPannel',
  MiddleCard = 'MiddleCard',
  BarrageMessage = 'BarrageMessage',
}

export const defaultPTLSetting: ToolkitSetting = {
  name: ToolkitNameEnum.LeftTopScores,
  type: 'PTL',
  show: true,
  editable: true,
  cssProperties: {
    top: 18,
    left: 24,
    color: '#ffffffe5',
  },
  children: {},
};

export const defaultPMCSetting: ToolkitSetting = {
  name: ToolkitNameEnum.MiddleCard,
  type: 'PBC',
  show: false,
  cssProperties: {
    color: '#fff',
  },
  children: {},
};

export const defaultPTRSetting: ToolkitSetting = {
  name: ToolkitNameEnum.RightTopTime,
  type: 'PTR',
  show: true,
  cssProperties: {
    top: 18,
    right: 24,
    color: '#070227ff',
  },
  children: {},
};

export const defaultBMSGSetting: ToolkitSetting = {
  name: ToolkitNameEnum.BarrageMessage,
  type: 'BMSG',
  show: true,
  cssProperties: {
    color: '#000000a7',
  },
};
