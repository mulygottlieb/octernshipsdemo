import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { Po3aorderTitle } from "../po3aorder/Po3aorderTitle";

export const OfStoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="fld1" source="fld1" />
        <TextInput label="fld2" source="fld2" />
        <ReferenceArrayInput
          source="po3aorders"
          reference="Po3aorder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={Po3aorderTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
