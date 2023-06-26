import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { OFSTORE_TITLE_FIELD } from "./OfStoreTitle";

export const OfStoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fld1" source="fld1" />
        <TextField label="fld2" source="fld2" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Po3aorder"
          target="OfStoreId"
          label="Po3aorders"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
