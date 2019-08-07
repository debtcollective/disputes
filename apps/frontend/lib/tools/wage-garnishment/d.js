import FieldTemplate from "../../../components/FieldTemplate";
import Form from "react-jsonschema-form";
import React from "react";
import { wageGarnishmentDSchema } from "@debtcollective/tools";

const WageGarnishmentDForm = () => (
  <Form
    showErrorList={false}
    FieldTemplate={FieldTemplate}
    uiSchema={wageGarnishmentDSchema.ui}
    schema={wageGarnishmentDSchema.json}
    onChange={() => console.log("changed")}
    onSubmit={() => console.log("submitted")}
    onError={() => console.log("errors")}
  />
);

export default WageGarnishmentDForm;
