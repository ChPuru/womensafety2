import { SortOrder } from "../../util/SortOrder";

export type SensorDataOrderByInput = {
  createdAt?: SortOrder;
  deviceId?: SortOrder;
  id?: SortOrder;
  sensorType?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
