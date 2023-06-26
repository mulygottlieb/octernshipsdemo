import { OfStore } from "../ofStore/OfStore";

export type Po3aorder = {
  createdAt: Date;
  id: string;
  of_store?: OfStore | null;
  t1: string | null;
  t2: string | null;
  t3: string | null;
  updatedAt: Date;
};
