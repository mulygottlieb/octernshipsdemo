import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { Po3aorderListRelationFilter } from "../po3aorder/Po3aorderListRelationFilter";

export type OfStoreWhereInput = {
  fld1?: StringNullableFilter;
  fld2?: StringNullableFilter;
  id?: StringFilter;
  po3aorders?: Po3aorderListRelationFilter;
};
