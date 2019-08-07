import FieldTemplate from "../../../components/FieldTemplate";
import Form from "react-jsonschema-form";
import { generalDebtSchema } from "@debtcollective/tools";
import React from "react";

const GeneralDebtForm = () => (
  <Form
    showErrorList={false}
    FieldTemplate={FieldTemplate}
    uiSchema={generalDebtSchema.ui}
    schema={generalDebtSchema.json}
    onChange={() => console.log("changed")}
    onSubmit={() => console.log("submitted")}
    onError={() => console.log("errors")}
  />
);

export default GeneralDebtForm;
