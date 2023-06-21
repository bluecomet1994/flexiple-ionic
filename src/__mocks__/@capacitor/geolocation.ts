/* eslint-disable @typescript-eslint/naming-convention */
import {
  CallbackID as _CallbackID,
  ClearWatchOptions as _ClearWatchOptions,
  GeolocationPluginPermissions as _GeolocationPluginPermissions,
  PermissionStatus as _PermissionStatus,
  Position as _Position,
  PositionOptions as _PositionOptions,
  WatchPositionCallback as _WatchPositionCallback,
} from '../../../node_modules/@capacitor/geolocation';

export type CallbackID = _CallbackID;
export type ClearWatchOptions = _ClearWatchOptions;
export type GeolocationPluginPermissions = _GeolocationPluginPermissions;
export type PermissionStatus = _PermissionStatus;
export type Position = _Position;
export type PositionOptions = _PositionOptions;
export type WatchPositionCallback = _WatchPositionCallback;

export const Geolocation = {
  getCurrentPosition: (_options?: PositionOptions): Promise<Position> =>
    Promise.resolve(void 0),
  watchPosition: (
    _options: PositionOptions,
    _callback: WatchPositionCallback
  ): Promise<CallbackID> => Promise.resolve(void 0),
  clearWatch: (_options: ClearWatchOptions): Promise<void> =>
    Promise.resolve(void 0),
  checkPermissions: (): Promise<PermissionStatus> => Promise.resolve(void 0),
  requestPermissions: (
    _permissions?: GeolocationPluginPermissions
  ): Promise<PermissionStatus> => Promise.resolve(void 0),
};
