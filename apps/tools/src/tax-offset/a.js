import FieldTemplate from "../../../components/FieldTemplate";
import Form from "react-jsonschema-form";
import React from "react";
import taxOffsetCommonSchema from "../schemas/tax-offset-common";

export const taxOffsetASchema = {
  ...taxOffsetCommonSchema,
};

const log = type => console.log.bind(console, type);

const TaxOffsetAForm = () => (
  <Form
    showErrorList={false}
    FieldTemplate={FieldTemplate}
    uiSchema={taxOffsetASchema.ui}
    schema={taxOffsetASchema.json}
    onChange={log("changed")}
    onSubmit={log("submitted")}
    onError={log("errors")}
  />
);

export default TaxOffsetAForm;
