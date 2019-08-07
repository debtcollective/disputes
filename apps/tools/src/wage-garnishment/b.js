import FieldTemplate from "../../../components/FieldTemplate";
import Form from "react-jsonschema-form";
import React from "react";
import wageGarnishmentCommonSchema from "../schemas/wage-garnishment-common";

export const wageGarnishmentBSchema = {
  ...wageGarnishmentCommonSchema,
  json: {
    ...wageGarnishmentCommonSchema.json,
  },
  ui: {
    ...wageGarnishmentCommonSchema.ui,
  },
};

const log = type => console.log.bind(console, type);

const WageGarnishmentBForm = () => (
  <Form
    showErrorList={false}
    FieldTemplate={FieldTemplate}
    uiSchema={wageGarnishmentCommonSchema.ui}
    schema={wageGarnishmentCommonSchema.json}
    onChange={log("changed")}
    onSubmit={log("submitted")}
    onError={log("errors")}
  />
);

export default WageGarnishmentBForm;
