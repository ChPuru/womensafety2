import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ChatMessageTitle } from "../chatMessage/ChatMessageTitle";
import { UserTitle } from "../user/UserTitle";

export const SessionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="chatMessages"
          reference="ChatMessage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ChatMessageTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="endTime" source="endTime" />
        <div />
        <DateTimeInput label="startTime" source="startTime" />
        <TextInput label="status" source="status" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
