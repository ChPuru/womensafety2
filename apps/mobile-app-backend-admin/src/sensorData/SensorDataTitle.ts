import { SensorData as TSensorData } from "../api/sensorData/SensorData";

export const SENSORDATA_TITLE_FIELD = "deviceId";

export const SensorDataTitle = (record: TSensorData): string => {
  return record.deviceId?.toString() || String(record.id);
};
