import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { RiskZonePredictionTitle } from "../riskZonePrediction/RiskZonePredictionTitle";

export const SensorDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
