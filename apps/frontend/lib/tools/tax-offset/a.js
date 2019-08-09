import FieldTemplate from "../../../components/FieldTemplate";
import Form from "react-jsonschema-form";
import React from "react";
import { taxOffsetASchema } from "@debtcollective/tools";

const TaxOffsetAForm = () => (
  <Form
    showErrorList={false}
    FieldTemplate={FieldTemplate}
    uiSchema={taxOffsetASchema.ui}
    schema={taxOffsetASchema.json}
    onChange={() => {
      console.log("changed");
    }}
    onSubmit={() => {
      console.log("submitted");
    }}
    onError={() => {
      console.log("errors");
    }}
  />
);

export default TaxOffsetAForm;
