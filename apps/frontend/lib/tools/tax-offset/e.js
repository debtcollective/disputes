import FieldTemplate from "../../../components/FieldTemplate";
import Form from "react-jsonschema-form";
import React from "react";
import { taxOffsetESchema } from "@debtcollective/tools";

const TaxOffsetEForm = () => (
  <Form
    showErrorList={false}
    FieldTemplate={FieldTemplate}
    uiSchema={taxOffsetESchema.ui}
    schema={taxOffsetESchema.json}
    onChange={() => console.log("changed")}
    onSubmit={() => console.log("submitted")}
    onError={() => console.log("errors")}
  />
);

export default TaxOffsetEForm;
