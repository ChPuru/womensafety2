import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SENSORDATA_TITLE_FIELD } from "../sensorData/SensorDataTitle";

export const RiskZonePredictionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
