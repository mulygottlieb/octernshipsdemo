import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { OFSTORE_TITLE_FIELD } from "../ofStore/OfStoreTitle";

export const Po3aorderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="of_store"
          source="ofstore.id"
          reference="OfStore"
        >
          <TextField source={OFSTORE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="t1" source="t1" />
        <TextField label="t2" source="t2" />
        <TextField label="t3" source="t3" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
