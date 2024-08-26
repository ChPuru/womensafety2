import { RiskZonePredictionUpdateManyWithoutSensorDataItemsInput } from "./RiskZonePredictionUpdateManyWithoutSensorDataItemsInput";
import { InputJsonValue } from "../../types";

export type SensorDataUpdateInput = {
  deviceId?: string | null;
  riskZonePredictions?: RiskZonePredictionUpdateManyWithoutSensorDataItemsInput;
  sensorType?: string | null;
  timestamp?: Date | null;
  value?: InputJsonValue;
};
