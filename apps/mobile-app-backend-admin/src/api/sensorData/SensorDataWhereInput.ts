import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RiskZonePredictionListRelationFilter } from "../riskZonePrediction/RiskZonePredictionListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type SensorDataWhereInput = {
  deviceId?: StringNullableFilter;
  id?: StringFilter;
  riskZonePredictions?: RiskZonePredictionListRelationFilter;
  sensorType?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  value?: JsonFilter;
};
