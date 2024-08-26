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

import { SENSORDATA_TITLE_FIELD } from "./SensorDataTitle";

export const SensorDataShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="deviceId" source="deviceId" />
        <TextField label="ID" source="id" />
        <TextField label="sensorType" source="sensorType" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="value" source="value" />
        <ReferenceManyField
          reference="RiskZonePrediction"
          target="sensorDataId"
          label="RiskZonePredictions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="location" source="location" />
            <TextField label="predictionTime" source="predictionTime" />
            <TextField label="riskLevel" source="riskLevel" />
            <ReferenceField
              label="sensorData"
              source="sensordata.id"
              reference="SensorData"
            >
              <TextField source={SENSORDATA_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
