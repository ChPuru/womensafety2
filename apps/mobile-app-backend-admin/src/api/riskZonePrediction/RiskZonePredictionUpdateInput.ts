import { InputJsonValue } from "../../types";
import { SensorDataWhereUniqueInput } from "../sensorData/SensorDataWhereUniqueInput";

export type RiskZonePredictionUpdateInput = {
  location?: InputJsonValue;
  predictionTime?: Date | null;
  riskLevel?: string | null;
  sensorData?: SensorDataWhereUniqueInput | null;
};
