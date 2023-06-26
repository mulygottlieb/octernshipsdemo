import { Po3aorder } from "../po3aorder/Po3aorder";

export type OfStore = {
  createdAt: Date;
  fld1: string | null;
  fld2: string | null;
  id: string;
  po3aorders?: Array<Po3aorder>;
  updatedAt: Date;
};
