import { Po3aorder as TPo3aorder } from "../api/po3aorder/Po3aorder";

export const PO3AORDER_TITLE_FIELD = "t1";

export const Po3aorderTitle = (record: TPo3aorder): string => {
  return record.t1 || String(record.id);
};
