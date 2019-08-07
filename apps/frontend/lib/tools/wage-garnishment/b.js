import FieldTemplate from "../../../components/FieldTemplate";
import Form from "react-jsonschema-form";
import React from "react";
import { wageGarnishmentBSchema } from "@debtcollective/tools";

const WageGarnishmentBForm = () => (
  <Form
    showErrorList={false}
    FieldTemplate={FieldTemplate}
    uiSchema={wageGarnishmentBSchema.ui}
    schema={wageGarnishmentBSchema.json}
    onChange={() => console.log("changed")}
    onSubmit={() => console.log("submitted")}
    onError={() => console.log("errors")}
  />
);

export default WageGarnishmentBForm;
