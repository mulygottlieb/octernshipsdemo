import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const Po3aorderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="t1" source="t1" />
        <TextInput label="t2" source="t2" />
        <TextInput label="t3" source="t3" />
      </SimpleForm>
    </Edit>
  );
};
