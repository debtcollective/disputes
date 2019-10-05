import FieldTemplate from "../../../components/FieldTemplate";
import Form from "react-jsonschema-form";
import { privateStudentLoanSchema } from "@debtcollective/tools";
import React from "react";

const PrivateStudentLoanForm = () => (
  <Form
    showErrorList={false}
    FieldTemplate={FieldTemplate}
    uiSchema={privateStudentLoanSchema.ui}
    schema={privateStudentLoanSchema.json}
    onChange={() => console.log("changed")}
    onSubmit={() => console.log("submitted")}
    onError={() => console.log("errors")}
  />
);

export default PrivateStudentLoanForm;
