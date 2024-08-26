import { RiskZonePrediction } from "../riskZonePrediction/RiskZonePrediction";
import { JsonValue } from "type-fest";

export type SensorData = {
  createdAt: Date;
  deviceId: string | null;
  id: string;
  riskZonePredictions?: Array<RiskZonePrediction>;
  sensorType: string | null;
  timestamp: Date | null;
  updatedAt: Date;
  value: JsonValue;
};
