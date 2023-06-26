import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { OFSTORE_TITLE_FIELD } from "../ofStore/OfStoreTitle";

export const Po3aorderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Po3aorders"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
