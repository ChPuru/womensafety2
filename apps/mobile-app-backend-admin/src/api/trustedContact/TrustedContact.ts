import { User } from "../user/User";

export type TrustedContact = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  relation: string | null;
  updatedAt: Date;
  user?: User | null;
};
