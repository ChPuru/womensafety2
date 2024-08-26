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
import { SENSORDATA_TITLE_FIELD } from "../sensorData/SensorDataTitle";

export const RiskZonePredictionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RiskZonePredictions"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
