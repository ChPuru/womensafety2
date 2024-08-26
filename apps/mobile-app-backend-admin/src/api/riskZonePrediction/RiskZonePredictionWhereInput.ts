import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SensorDataWhereUniqueInput } from "../sensorData/SensorDataWhereUniqueInput";

export type RiskZonePredictionWhereInput = {
  id?: StringFilter;
  location?: JsonFilter;
  predictionTime?: DateTimeNullableFilter;
  riskLevel?: StringNullableFilter;
  sensorData?: SensorDataWhereUniqueInput;
};
