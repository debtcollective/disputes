import FieldTemplate from "../../../components/FieldTemplate";
import Form from "react-jsonschema-form";
import React from "react";
import sharedSchema from "../../../lib/disputes/wage-garnishment-shared";

const schemas = {
  ...sharedSchema,
  json: {
    ...sharedSchema.json,
  },
  ui: {
    ...sharedSchema.ui,
  },
};

const log = type => console.log.bind(console, type);

const DisputeWageB = () => (
  <Form
    showErrorList={false}
    FieldTemplate={FieldTemplate}
    uiSchema={schemas.ui}
    schema={schemas.json}
    onChange={log("changed")}
    onSubmit={log("submitted")}
    onError={log("errors")}
  />
);

export default DisputeWageB;
