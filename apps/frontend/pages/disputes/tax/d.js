/*eslint sort-keys: 0*/

import FieldTemplate from "../../../components/FieldTemplate";
import Form from "react-jsonschema-form";
import React from "react";
import sharedSchema from "../../../lib/disputes/taxes-offset-shared";
import yesnoSchema from "../../../lib/disputes/yesno-schema";

const schemas = {
  json: {
    ...sharedSchema.json,
    properties: {
      "atbd-applying-as-group": yesnoSchema({
        keyName: "atbd-applying-as",
        title: "Are you applying for this loan discharge as a parent",
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
      "atbd-program-of-study": {
        title: "What was your (or the student's) program of study?",
        type: "string",
      },
      // TODO: when choose other we need to display "atbd-option5-text" to "Specify"
      "atbd-option": {
        enum: [
          "atbd-option1",
          "atbd-option2",
          "atbd-option3",
          "atbd-option4",
          "atbd-option5",
        ],
        enumNames: [
          "Age",
          "Physical Condition",
          "Mental Condition",
          "Criminal Record",
          "Other:",
        ],
        type: "string",
      },
      "atbd-law": {
        title:
          "Which state law do you believe was violated by your school? Please include as much information as you can about the law, including the legal code number if you have it.",
        type: "string",
      },
      // TODO: when choose yes show "atbd-inform"
      "atbd-reason-not-to-benefit": {
        default: false,
        enum: [true, false],
        enumNames: ["Yes", "No"],
        title:
          "Before issuing your loan, did the school ask you if there was an reason you could not benefit from your degree?",
      },
    },
    title: "Ability To Benefit - Disqualifying Status",
    type: "object",
  },
  ui: {
    ...sharedSchema.ui,
  },
};

const log = type => console.log.bind(console, type);

const DisputeTaxesB = () => (
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

export default DisputeTaxesB;
