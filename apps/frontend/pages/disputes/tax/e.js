/*eslint sort-keys: 0*/

import FieldTemplate from "../../../components/FieldTemplate";
import Form from "react-jsonschema-form";
import React from "react";
import sharedSchema from "../../../lib/disputes/taxes-offset-shared";
import yesnoSchema from "../../../lib/disputes/yesno-schema";

const schemas = {
  ...sharedSchema,
  json: {
    ...sharedSchema.json,
    properties: {
      ...sharedSchema.json.properties,
      fc: {
        properties: {
          "fc-applying-as-group": yesnoSchema({
            keyName: "fc-applying-as",
            title: "Are you applying for this loan discharge as a parent?",
            yesProps: {
              "atbd-student-name": {
                title: "Student name (Last, First, MI)",
                type: "string",
              },
              "atbd-student-ssn": {
                title: "Student SSN",
                type: "string",
              },
            },
          }),
          "fc-documents": {
            items: {
              enum: [
                "fc-documents-a",
                "fc-documents-b",
                "fc-documents-c",
                "fc-documents-d",
                "fc-documents-e",
                "fc-documents-f",
                "fc-documents-g",
              ],
              enumNames: [
                "Loan Application",
                "Promissory note",
                "Master promissory note",
                "Combined application/promissory node",
                "Loan check",
                "Electronic funds transfer authorization",
                "Master check authorization",
              ],
              type: "string",
            },
            title:
              "You believe your loan should not be paid because of a violation of state regulations related to your:",
            type: "array",
            uniqueItems: true,
          },
          "fc-tuition-payment": {
            title:
              "How did you (or the student) pay tuition and fees to attend the school?",
            type: "string",
          },
          "fc-explain": {
            title:
              "Explain the circumstances under which the person signed your name without your permission",
            type: "string",
          },
        },
        title: "False Certification - Unauthorized signature/payment",
        type: "object",
      },
    },
  },
  ui: {
    ...sharedSchema.ui,
  },
};

const log = type => console.log.bind(console, type);

const DisputeTaxesE = () => (
  <Form
    showErrorList={false}
    FieldTemplate={FieldTemplate}
    uiSchema={schemas.ui}
    schema={schemas.json}
    onChange={log("changed")}
    onSubmit={log("submitted")}
    onError={log("errors")}
  />
);

export default DisputeTaxesE;
