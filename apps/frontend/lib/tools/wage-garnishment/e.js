import FieldTemplate from "../../../components/FieldTemplate";
import Form from "react-jsonschema-form";
import React from "react";
import { wageGarnishmentESchema } from "@debtcollective/tools";

const WageGarnishmentEForm = () => (
  <Form
    showErrorList={false}
    FieldTemplate={FieldTemplate}
    uiSchema={wageGarnishmentESchema.ui}
    schema={wageGarnishmentESchema.json}
    onChange={() => console.log("changed")}
    onSubmit={() => console.log("submitted")}
    onError={() => console.log("errors")}
  />
);

export default WageGarnishmentEForm;
