import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const OfStoreCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fld1" source="fld1" />
        <TextInput label="fld2" source="fld2" />
      </SimpleForm>
    </Create>
  );
};
