import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SensorDataTitle } from "../sensorData/SensorDataTitle";

export const RiskZonePredictionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <DateTimeInput label="predictionTime" source="predictionTime" />
        <TextInput label="riskLevel" source="riskLevel" />
        <ReferenceInput
          source="sensorData.id"
          reference="SensorData"
          label="sensorData"
        >
          <SelectInput optionText={SensorDataTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
