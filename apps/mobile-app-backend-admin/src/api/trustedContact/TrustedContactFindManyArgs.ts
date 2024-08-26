import { TrustedContactWhereInput } from "./TrustedContactWhereInput";
import { TrustedContactOrderByInput } from "./TrustedContactOrderByInput";

export type TrustedContactFindManyArgs = {
  where?: TrustedContactWhereInput;
  orderBy?: Array<TrustedContactOrderByInput>;
  skip?: number;
  take?: number;
};
