import FieldTemplate from "../../../components/FieldTemplate";
import Form from "react-jsonschema-form";
import React from "react";
import { wageGarnishmentCSchema } from "@debtcollective/tools";

const WageGarnishmentCForm = () => (
  <Form
    showErrorList={false}
    FieldTemplate={FieldTemplate}
    uiSchema={wageGarnishmentCSchema.ui}
    schema={wageGarnishmentCSchema.json}
    onChange={() => console.log("changed")}
    onSubmit={() => console.log("submitted")}
    onError={() => console.log("errors")}
  />
);

export default WageGarnishmentCForm;
