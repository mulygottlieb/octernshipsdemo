import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { Po3aorderList } from "./po3aorder/Po3aorderList";
import { Po3aorderCreate } from "./po3aorder/Po3aorderCreate";
import { Po3aorderEdit } from "./po3aorder/Po3aorderEdit";
import { Po3aorderShow } from "./po3aorder/Po3aorderShow";
import { OfStoreList } from "./ofStore/OfStoreList";
import { OfStoreCreate } from "./ofStore/OfStoreCreate";
import { OfStoreEdit } from "./ofStore/OfStoreEdit";
import { OfStoreShow } from "./ofStore/OfStoreShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"svc123"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Po3aorder"
          list={Po3aorderList}
          edit={Po3aorderEdit}
          create={Po3aorderCreate}
          show={Po3aorderShow}
        />
        <Resource
          name="OfStore"
          list={OfStoreList}
          edit={OfStoreEdit}
          create={OfStoreCreate}
          show={OfStoreShow}
        />
      </Admin>
    </div>
  );
};

export default App;
