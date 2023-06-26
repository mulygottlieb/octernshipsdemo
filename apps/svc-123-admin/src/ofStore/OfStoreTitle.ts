import { OfStore as TOfStore } from "../api/ofStore/OfStore";

export const OFSTORE_TITLE_FIELD = "fld1";

export const OfStoreTitle = (record: TOfStore): string => {
  return record.fld1 || String(record.id);
};
