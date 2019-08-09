import FieldTemplate from "../../../components/FieldTemplate";
import Form from "react-jsonschema-form";
import React from "react";
import { taxOffsetDSchema } from "@debtcollective/tools";

const TaxOffsetDForm = () => (
  <Form
    showErrorList={false}
    FieldTemplate={FieldTemplate}
    uiSchema={taxOffsetDSchema.ui}
    schema={taxOffsetDSchema.json}
    onChange={() => console.log("changed")}
    onSubmit={() => console.log("submitted")}
    onError={() => console.log("errors")}
  />
);

export default TaxOffsetDForm;
