import FieldTemplate from "../../../components/FieldTemplate";
import Form from "react-jsonschema-form";
import React from "react";
import taxOffsetCommonSchema from "../schemas/tax-offset-common";

export const taxOffsetBSchema = {
  ...taxOffsetCommonSchema,
};

const log = type => console.log.bind(console, type);

const TaxOffsetBForm = () => (
  <Form
    showErrorList={false}
    FieldTemplate={FieldTemplate}
    uiSchema={taxOffsetBSchema.ui}
    schema={taxOffsetBSchema.json}
    onChange={log("changed")}
    onSubmit={log("submitted")}
    onError={log("errors")}
  />
);

export default TaxOffsetBForm;
