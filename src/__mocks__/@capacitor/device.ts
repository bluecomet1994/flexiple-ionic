/* eslint-disable @typescript-eslint/naming-convention */
import {
  DeviceId as _DeviceId,
  DeviceInfo as _DeviceInfo,
  OperatingSystem as _OperatingSystem,
} from '../../../node_modules/@capacitor/device';

export type DeviceId = _DeviceId;
export type DeviceInfo = _DeviceInfo;
export type OperatingSystem = _OperatingSystem;

export const Device = {
  getId: (): Promise<DeviceId> => Promise.resolve(void 0),
  getInfo: (): Promise<DeviceInfo> => Promise.resolve(void 0),
};
