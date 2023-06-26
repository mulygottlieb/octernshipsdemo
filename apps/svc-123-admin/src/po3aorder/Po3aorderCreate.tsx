import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { OfStoreTitle } from "../ofStore/OfStoreTitle";

export const Po3aorderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="of_store.id"
          reference="OfStore"
          label="of_store"
        >
          <SelectInput optionText={OfStoreTitle} />
        </ReferenceInput>
        <TextInput label="t1" source="t1" />
        <TextInput label="t2" source="t2" />
        <TextInput label="t3" source="t3" />
      </SimpleForm>
    </Create>
  );
};
