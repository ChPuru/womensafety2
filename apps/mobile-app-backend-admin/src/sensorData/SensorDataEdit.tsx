import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { RiskZonePredictionTitle } from "../riskZonePrediction/RiskZonePredictionTitle";

export const SensorDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="deviceId" source="deviceId" />
        <ReferenceArrayInput
          source="riskZonePredictions"
          reference="RiskZonePrediction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RiskZonePredictionTitle} />
        </ReferenceArrayInput>
        <TextInput label="sensorType" source="sensorType" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
