import FieldTemplate from "../../../components/FieldTemplate";
import Form from "react-jsonschema-form";
import React from "react";
import { taxOffsetCSchema } from "@debtcollective/tools";

const TaxOffsetCForm = () => (
  <Form
    showErrorList={false}
    FieldTemplate={FieldTemplate}
    uiSchema={taxOffsetCSchema.ui}
    schema={taxOffsetCSchema.json}
    onChange={() => console.log("changed")}
    onSubmit={() => console.log("submitted")}
    onError={() => console.log("errors")}
  />
);

export default TaxOffsetCForm;
