'use strict'
import {NativeEventEmitter, NativeModules} from 'react-native'

const AntPlusModule = NativeModules.AntPlusModule ? NativeModules.AntPlusModule : null
export const AntPlusEmitter = new NativeEventEmitter(AntPlusModule)

export enum AntPlusDeviceType {
  BIKE_POWER = 11,
  CONTROLLABLE_DEVICE = 16,
  FITNESS_EQUIPMENT = 17,
  BLOOD_PRESSURE = 18,
  GEOCACHE = 19,
  ENVIRONMENT = 25,
  WEIGHT_SCALE = 119,
  HEARTRATE = 120,
  BIKE_SPDCAD = 121,
  BIKE_CADENCE = 122,
  BIKE_SPD = 123,
  STRIDE_SDM = 124,
  UNKNOWN = -1,
}

export enum AntPlusDeviceState {
  DEAD = -100,
  CLOSED = 1,
  SEARCHING = 2,
  TRACKING = 3,
  PROCESSING_REQUEST = 300,
  UNRECOGNIZED = -1,
}

export enum AntPlusDevicesTypeName {
  BIKE_POWER = 'Bike Power Sensors',
  CONTROLLABLE_DEVICE = 'Controls',
  FITNESS_EQUIPMENT = 'Fitness Equipment Devices',
  BLOOD_PRESSURE = 'Blood Pressure Monitors',
  GEOCACHE = 'Geocache Transmitters',
  ENVIRONMENT = 'Environment Sensors',
  WEIGHT_SCALE = 'Weight Sensors',
  HEARTRATE = 'Heart Rate Sensors',
  BIKE_SPDCAD = 'Bike Speed and Cadence Sensors',
  BIKE_CADENCE = 'Bike Cadence Sensors',
  BIKE_SPD = 'Bike Speed Sensors',
  STRIDE_SDM = 'Stride-Based Speed and Distance Sensors',
  UNKNOWN = 'Unknown',
}

export enum AntPlusEvent {
  searchStatus = 'searchStatus',
  rssi = 'rssi',
  foundDevice = 'foundDevice',
  devicesStateChange = 'devicesStateChange',

  bikeCadence = 'bikeCadence',
  bikePower = 'bikePower',
  bikeSpeedDistance = 'bikeSpeedDistance',
  bikeSpeedAndCadence = 'bikeSpeedAndCadence',
  environment = 'environment',
  fitnessEquipment = 'fitnessEquipment',
  weightScale = 'weightScale',
  heartRate = 'heartRate',

  error = 'error',
}

export interface AntPlusRssiEvent {
  rssi: number
  resultID: AntPlusDevice['resultID']
}

export const AntPlusRssiSignal = {
  perfect: -65,
  good: -75,
  satisfactory: -85,
}

export enum AntPlusLegacyCommonEvent {
  CumulativeOperatingTime = 'CumulativeOperatingTime',
  ManufacturerAndSerial = 'ManufacturerAndSerial',
  VersionAndModel = 'VersionAndModel',
  Rssi = 'Rssi',
}

export enum AntPlusCommonEvent {
  BatteryStatus = 'BatteryStatus',
  ManufacturerIdentification = 'ManufacturerIdentification',
  ManufacturerSpecific = 'ManufacturerSpecific',
  ProductInformation = 'ProductInformation',
  Rssi = 'Rssi'
}

export enum AntPlusBikeCadenceEvent {
  CalculatedCadence = 'CalculatedCadence',
  MotionAndCadence = 'MotionAndCadence',
  RawCadence = 'RawCadence',
}

export enum AntPlusBikePowerEvent {
  AutoZeroStatus = 'AutoZeroStatus',
  CalculatedCrankCadence = 'CalculatedCrankCadence',
  CalculatedPower = 'CalculatedPower',
  CalculatedTorque = 'CalculatedTorque',
  CalculatedWheelDistance = 'CalculatedWheelDistance',
  CalculatedWheelSpeed = 'CalculatedWheelSpeed',
  CalibrationMessage = 'CalibrationMessage',
  CrankParameters = 'CrankParameters',
  InstantaneousCadence = 'InstantaneousCadence',
  MeasurementOutputData = 'MeasurementOutputData',
  PedalPowerBalance = 'PedalPowerBalance',
  PedalSmoothness = 'PedalSmoothness',
  RawCrankTorqueData = 'RawCrankTorqueData',
  RawCtfData = 'RawCtfData',
  RawPowerOnlyData = 'RawPowerOnlyData',
  RawWheelTorqueData = 'RawWheelTorqueData',
  TorqueEffectiveness = 'TorqueEffectiveness'
}

export enum AntPlusBikePowerRequest {
  CommandBurst = 'CommandBurst',
  CrankParameters = 'CrankParameters',
  CustomCalibrationParameters = 'CustomCalibrationParameters',
  ManualCalibration = 'ManualCalibration',
  SetAutoZero = 'SetAutoZero',
  SetCrankParameters = 'SetCrankParameters',
  SetCtfSlope = 'SetCtfSlope',
  SetCustomCalibrationParameters = 'SetCustomCalibrationParameters'
}

export interface AntPlusBikePowerRequestCommandBurstArguments {
  requestedCommandId: number
  commandData: number[]
}

export interface AntPlusBikePowerRequestCustomCalibrationParametersArguments {
  manufacturerSpecificParameters: number[]
}

export interface AntPlusBikePowerRequestSetAutoZeroArguments {
  autoZeroEnable: boolean
}

export interface AntPlusBikePowerRequestSetCrankParametersArguments {
  crankLengthSetting: string
  fullCrankLength: number
}

export interface AntPlusBikePowerRequestSetCtfSlopeArguments {
  slope: number
}

export interface AntPlusBikePowerRequestSetCustomCalibrationParametersArguments {
  manufacturerSpecificParameters: number[]
}

export interface AntPlusBikePowerRequestSetCustomCalibrationParametersArguments {
  manufacturerSpecificParameters: number[]
}

export enum AntPlusSpeedDistanceEvent {
  CalculatedAccumulatedDistance = 'CalculatedAccumulatedDistance',
  CalculatedSpeed = 'CalculatedSpeed',
  MotionAndSpeedData = 'MotionAndSpeedData',
  RawSpeedAndDistanceData = 'RawSpeedAndDistanceData',
}

export enum AntPlusSpeedAndCadenceEvent {
  BatteryStatus = 'BatteryStatus',
}

export enum AntPlusEnvironmentEvent {
  TemperatureData = 'TemperatureData',
}

export enum AntPlusFitnessEquipmentEvent {
  CalibrationInProgress = 'CalibrationInProgress',
  CalibrationResponse = 'CalibrationResponse',
  Capabilities = 'Capabilities',
  GeneralFitnessEquipmentData = 'GeneralFitnessEquipmentData',
  GeneralMetabolicData = 'GeneralMetabolicData',
  GeneralSettings = 'GeneralSettings',
  LapOccured = 'LapOccured',
  UserConfiguration = 'UserConfiguration',
  Treadmill = 'Treadmill',
  ClimberData = 'ClimberData',
  EllipticalData = 'EllipticalData',
  NordicSkierData = 'NordicSkierData',
  RowerData = 'RowerData',
  BikeData = 'BikeData',
  BasicResistance = 'BasicResistance',
  CalculatedTrainerDistance = 'CalculatedTrainerDistance',
  CalculatedTrainerPower = 'CalculatedTrainerPower',
  CalculatedTrainerSpeed = 'CalculatedTrainerSpeed',
  CommandStatus = 'CommandStatus',
  RawTrainerData = 'RawTrainerData',
  RawTrainerTorqueData = 'RawTrainerTorqueData',
  TargetPower = 'TargetPower',
  TrackResistance = 'TrackResistance',
  TrainerStatus = 'TrainerStatus',
  WindResistance = 'WindResistance',
}

export enum AntPlusFitnessEquipmentRequest {
  SetUserConfiguration = 'SetUserConfiguration',
  SpinDownCalibration = 'SpinDownCalibration',
  UserConfiguration = 'UserConfiguration',
  ZeroOffsetCalibration = 'ZeroOffsetCalibration',
  SetTargetPower = 'SetTargetPower',
  BasicResistance = 'BasicResistance',
  CommandStatus = 'CommandStatus',
  SetBasicResistance = 'SetBasicResistance',
  SetTrackResistance = 'SetTrackResistance',
  SetWindResistance = 'SetWindResistance',
  TargetPower = 'TargetPower',
  TrackResistance = 'TrackResistance',
  WindResistance = 'WindResistance',
}

export interface AntPlusFitnessEquipmentRequestSetUserConfiguration {
  bicycleWeight: number
  gearRatio: number
  bicycleWheelDiameter: number
  userWeight: number
}

export interface AntPlusFitnessEquipmentRequestSetTargetPower {
  target: number
}

export interface AntPlusFitnessEquipmentRequestSetBasicResistance {
  totalResistance: number

}

export interface AntPlusFitnessEquipmentRequestSetTrackResistance {
  grade: number
  rollingResistanceCoefficient: number
}

export type AntPlusFitnessEquipmentRequestSetWindResistance = {
  windSpeed: number
  draftingFactor: number
  windResistanceCoefficient: number
} | {
  windSpeed: number
  draftingFactor: number
  frontalSurfaceArea: number
  dragCoefficient: number
  airDensity: number
}

export enum AntPlusHeartRateEvent {
  CalculatedRrInterval = 'CalculatedRrInterval',
  HeartRateData = 'HeartRateData',
  Page4AddtData = 'Page4AddtData',
}

export enum AntPlusWeightScaleEvent {
  BodyWeightBroadcast = 'BodyWeightBroadcast',
  BatteryStatus = 'BatteryStatus',
  ManufacturerIdentification = 'ManufacturerIdentification',
  ManufacturerSpecific = 'ManufacturerSpecific',
  ProductInformation = 'ProductInformation',
  Rssi = 'Rssi',
}

export enum AntPlusWeightScaleRequest {
  BasicMeasurement = 'BasicMeasurement',
  AdvancedMeasurement = 'AdvancedMeasurement',
}

interface AntPlusWeightScaleRequestAdvancedMeasurement {
  gender: number
  age: number
  height: number
  activityLevel: number
  lifetimeAthlete: boolean
}

export interface AntPlusDevice {
  antDeviceNumber: number
  antPlusDeviceType: AntPlusDeviceType
  antPlusDeviceTypeName: AntPlusDevicesTypeName
  describeContents: number
  deviceDisplayName: string
  isAlreadyConnected: boolean
  isPreferredDevice: boolean
  isUserRecognizedDevice: boolean
  resultID: number
  rssi?: number
}

enum AntPlusRequestAccessResult {
  SUCCESS = 'SUCCESS',
  USER_CANCELLED = 'USER_CANCELLED',
  CHANNEL_NOT_AVAILABLE = 'CHANNEL_NOT_AVAILABLE',
  OTHER_FAILURE = 'OTHER_FAILURE',
  DEPENDENCY_NOT_INSTALLED = 'DEPENDENCY_NOT_INSTALLED',
  DEVICE_ALREADY_IN_USE = 'DEVICE_ALREADY_IN_USE',
  SEARCH_TIMEOUT = 'SEARCH_TIMEOUT',
  ALREADY_SUBSCRIBED = 'ALREADY_SUBSCRIBED',
  BAD_PARAMS = 'BAD_PARAMS',
  ADAPTER_NOT_DETECTED = 'ADAPTER_NOT_DETECTED',
  UNRECOGNIZED = 'UNRECOGNIZED',
}

export interface AntPlusSearchStatus {
  isSearching: boolean
  reason: AntPlusRequestAccessResult
}

export interface AntPlusConnect {
  name: string
  state: AntPlusDeviceState
  connected: boolean
  code: AntPlusRequestAccessResult
}

export interface AntPlusDeviceStateChange {
  event: AntPlusDeviceState
  antDeviceNumber: boolean
  state: 'DEAD' | 'CLOSED' | 'SEARCHING' | 'TRACKING' | 'PROCESSING_REQUEST' | 'UNRECOGNIZED'
}

type AntPlusSubscribeEvent =
  AntPlusLegacyCommonEvent[]
  | AntPlusBikeCadenceEvent[]
  | AntPlusBikePowerEvent[]
  | AntPlusSpeedDistanceEvent[]
  | AntPlusSpeedAndCadenceEvent[]
  | AntPlusEnvironmentEvent[]
  | AntPlusFitnessEquipmentEvent[]
  | AntPlusHeartRateEvent[]
  | AntPlusWeightScaleEvent[]

type AntPlusRequest = {
  requestName: AntPlusBikePowerRequest.CommandBurst,
  args: AntPlusBikePowerRequestCommandBurstArguments
} | {
  requestName: AntPlusBikePowerRequest.CustomCalibrationParameters,
  args: AntPlusBikePowerRequestCustomCalibrationParametersArguments
} | {
  requestName: AntPlusBikePowerRequest.SetAutoZero,
  args: AntPlusBikePowerRequestSetAutoZeroArguments
} | {
  requestName: AntPlusBikePowerRequest.SetCrankParameters,
  args: AntPlusBikePowerRequestSetCrankParametersArguments
} | {
  requestName: AntPlusBikePowerRequest.SetCtfSlope,
  args: AntPlusBikePowerRequestSetCtfSlopeArguments
} | {
  requestName: AntPlusBikePowerRequest.SetCustomCalibrationParameters,
  args: AntPlusBikePowerRequestSetCustomCalibrationParametersArguments
} | {
  requestName: AntPlusFitnessEquipmentRequest.SetUserConfiguration,
  args: AntPlusFitnessEquipmentRequestSetUserConfiguration,
} | {
  requestName: AntPlusFitnessEquipmentRequest.SetTargetPower,
  args: AntPlusFitnessEquipmentRequestSetTargetPower,
} | {
  requestName: AntPlusFitnessEquipmentRequest.SetBasicResistance,
  args: AntPlusFitnessEquipmentRequestSetBasicResistance,
} | {
  requestName: AntPlusFitnessEquipmentRequest.SetTrackResistance,
  args: AntPlusFitnessEquipmentRequestSetTrackResistance,
} | {
  requestName: AntPlusFitnessEquipmentRequest.SetWindResistance,
  args: AntPlusFitnessEquipmentRequestSetWindResistance,
} | {
  requestName:
    AntPlusBikePowerRequest.CrankParameters |
    AntPlusBikePowerRequest.ManualCalibration |
    AntPlusFitnessEquipmentRequest.SpinDownCalibration |
    AntPlusFitnessEquipmentRequest.UserConfiguration |
    AntPlusFitnessEquipmentRequest.ZeroOffsetCalibration |
    AntPlusFitnessEquipmentRequest.BasicResistance |
    AntPlusFitnessEquipmentRequest.CommandStatus |
    AntPlusFitnessEquipmentRequest.TargetPower |
    AntPlusFitnessEquipmentRequest.TrackResistance |
    AntPlusFitnessEquipmentRequest.WindResistance |
    AntPlusWeightScaleRequest.BasicMeasurement,
  args: {}
} | {
  requestName: AntPlusWeightScaleRequest.AdvancedMeasurement,
  args: AntPlusWeightScaleRequestAdvancedMeasurement
}

interface AntPlus {
  startSearch: (antPlusDeviceTypes: AntPlusDeviceType[], seconds: number, allowRssi: boolean) => Promise<boolean>
  stopSearch: () => Promise<boolean>
  connect: (antDeviceNumber: number, antPlusDeviceType: AntPlusDeviceType) => Promise<AntPlusConnect>
  disconnect: (antDeviceNumber: number) => Promise<boolean>
  subscribe: (antDeviceNumber: number, events: AntPlusSubscribeEvent, isOnlyNewData: boolean) => Promise<boolean>
  unsubscribe: (antDeviceNumber: number, events: AntPlusSubscribeEvent) => Promise<boolean>
  setVariables: (antDeviceNumber: number, variables: {[key: string]: any}) => Promise<boolean>
  getVariables: (antDeviceNumber: number, variables: {[key: string]: any}) => Promise<any>
  request: <T extends AntPlusRequest>(antDeviceNumber: number, requestName: T['requestName'], args: T['args']) => Promise<any>
}

export default AntPlusModule as AntPlus
