import { SortOrder } from "../../util/SortOrder";

export type RiskZonePredictionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  predictionTime?: SortOrder;
  riskLevel?: SortOrder;
  sensorDataId?: SortOrder;
  updatedAt?: SortOrder;
};
