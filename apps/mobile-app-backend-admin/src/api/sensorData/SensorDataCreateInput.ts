import { RiskZonePredictionCreateNestedManyWithoutSensorDataItemsInput } from "./RiskZonePredictionCreateNestedManyWithoutSensorDataItemsInput";
import { InputJsonValue } from "../../types";

export type SensorDataCreateInput = {
  deviceId?: string | null;
  riskZonePredictions?: RiskZonePredictionCreateNestedManyWithoutSensorDataItemsInput;
  sensorType?: string | null;
  timestamp?: Date | null;
  value?: InputJsonValue;
};
