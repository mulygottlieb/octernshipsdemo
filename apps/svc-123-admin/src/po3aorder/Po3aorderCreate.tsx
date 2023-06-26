import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const Po3aorderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="t1" source="t1" />
        <TextInput label="t2" source="t2" />
        <TextInput label="t3" source="t3" />
      </SimpleForm>
    </Create>
  );
};
