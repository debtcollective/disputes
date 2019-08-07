import FieldTemplate from "../../../components/FieldTemplate";
import Form from "react-jsonschema-form";
import React from "react";
import wageGarnishmentCommonSchema from "../schemas/wage-garnishment-common";

export const wageGarnishmentASchema = {
  ...wageGarnishmentCommonSchema,
  json: {
    ...wageGarnishmentCommonSchema.json,
  },
  ui: {
    ...wageGarnishmentCommonSchema.ui,
  },
};

const log = type => console.log.bind(console, type);

const WageGarnishmentAForm = () => (
  <Form
    showErrorList={false}
    FieldTemplate={FieldTemplate}
    uiSchema={wageGarnishmentASchema.ui}
    schema={wageGarnishmentASchema.json}
    onChange={log("changed")}
    onSubmit={log("submitted")}
    onError={log("errors")}
  />
);

export default WageGarnishmentAForm;
