import FieldTemplate from "../../../components/FieldTemplate";
import Form from "react-jsonschema-form";
import React from "react";
import schema from "./credit-report-schema";

const CreditReport = () => (
  <Form
    showErrorList={false}
    FieldTemplate={FieldTemplate}
    uiSchema={schema.ui}
    schema={schema.json}
    onChange={() => console.log("changed")}
    onSubmit={() => console.log("submitted")}
    onError={() => console.log("errors")}
  />
);

export default CreditReport;
