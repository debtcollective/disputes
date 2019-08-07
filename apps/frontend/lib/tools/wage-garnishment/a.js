import FieldTemplate from "../../../components/FieldTemplate";
import Form from "react-jsonschema-form";
import React from "react";
import { wageGarnishmentASchema } from "@debtcollective/tools";

const WageGarnishmentAForm = () => (
  <Form
    showErrorList={false}
    FieldTemplate={FieldTemplate}
    uiSchema={wageGarnishmentASchema.ui}
    schema={wageGarnishmentASchema.json}
    onChange={() => console.log("changed")}
    onSubmit={() => console.log("submitted")}
    onError={() => console.log("errors")}
  />
);

export default WageGarnishmentAForm;
