import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SensorDataTitle } from "../sensorData/SensorDataTitle";

export const RiskZonePredictionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
