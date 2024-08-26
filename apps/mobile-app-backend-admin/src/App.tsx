import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TrustedContactList } from "./trustedContact/TrustedContactList";
import { TrustedContactCreate } from "./trustedContact/TrustedContactCreate";
import { TrustedContactEdit } from "./trustedContact/TrustedContactEdit";
import { TrustedContactShow } from "./trustedContact/TrustedContactShow";
import { SilentAlarmList } from "./silentAlarm/SilentAlarmList";
import { SilentAlarmCreate } from "./silentAlarm/SilentAlarmCreate";
import { SilentAlarmEdit } from "./silentAlarm/SilentAlarmEdit";
import { SilentAlarmShow } from "./silentAlarm/SilentAlarmShow";
import { AlertList } from "./alert/AlertList";
import { AlertCreate } from "./alert/AlertCreate";
import { AlertEdit } from "./alert/AlertEdit";
import { AlertShow } from "./alert/AlertShow";
import { RiskZonePredictionList } from "./riskZonePrediction/RiskZonePredictionList";
import { RiskZonePredictionCreate } from "./riskZonePrediction/RiskZonePredictionCreate";
import { RiskZonePredictionEdit } from "./riskZonePrediction/RiskZonePredictionEdit";
import { RiskZonePredictionShow } from "./riskZonePrediction/RiskZonePredictionShow";
import { SensorDataList } from "./sensorData/SensorDataList";
import { SensorDataCreate } from "./sensorData/SensorDataCreate";
import { SensorDataEdit } from "./sensorData/SensorDataEdit";
import { SensorDataShow } from "./sensorData/SensorDataShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"Mobile App Backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TrustedContact"
          list={TrustedContactList}
          edit={TrustedContactEdit}
          create={TrustedContactCreate}
          show={TrustedContactShow}
        />
        <Resource
          name="SilentAlarm"
          list={SilentAlarmList}
          edit={SilentAlarmEdit}
          create={SilentAlarmCreate}
          show={SilentAlarmShow}
        />
        <Resource
          name="Alert"
          list={AlertList}
          edit={AlertEdit}
          create={AlertCreate}
          show={AlertShow}
        />
        <Resource
          name="RiskZonePrediction"
          list={RiskZonePredictionList}
          edit={RiskZonePredictionEdit}
          create={RiskZonePredictionCreate}
          show={RiskZonePredictionShow}
        />
        <Resource
          name="SensorData"
          list={SensorDataList}
          edit={SensorDataEdit}
          create={SensorDataCreate}
          show={SensorDataShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
