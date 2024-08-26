import { SortOrder } from "../../util/SortOrder";

export type EmergencyContactOrderByInput = {
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phoneNumber?: SortOrder;
  relation?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
