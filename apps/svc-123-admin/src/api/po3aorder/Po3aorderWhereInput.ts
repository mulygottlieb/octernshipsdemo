import { StringFilter } from "../../util/StringFilter";
import { OfStoreWhereUniqueInput } from "../ofStore/OfStoreWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type Po3aorderWhereInput = {
  id?: StringFilter;
  of_store?: OfStoreWhereUniqueInput;
  t1?: StringNullableFilter;
  t2?: StringNullableFilter;
  t3?: StringNullableFilter;
};
