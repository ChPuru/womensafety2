import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { SessionTitle } from "../session/SessionTitle";

export const ChatMessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="messageContent" multiline source="messageContent" />
        <TextInput label="senderId" source="senderId" />
        <DateTimeInput label="sentAt" source="sentAt" />
        <ReferenceInput source="session.id" reference="Session" label="session">
          <SelectInput optionText={SessionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
