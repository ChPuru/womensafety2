import { JsonValue } from "type-fest";
import { SensorData } from "../sensorData/SensorData";

export type RiskZonePrediction = {
  createdAt: Date;
  id: string;
  location: JsonValue;
  predictionTime: Date | null;
  riskLevel: string | null;
  sensorData?: SensorData | null;
  updatedAt: Date;
};
