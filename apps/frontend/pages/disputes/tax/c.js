import FieldTemplate from "../../../components/FieldTemplate";
import Form from "react-jsonschema-form";
import React from "react";
import sharedSchema from "../../../lib/disputes/taxes-offset-shared";

const schemas = {
  json: {
    ...sharedSchema.json,
    properties: {
      ...sharedSchema.json.properties,
      atb: {
        properties: {
          "applying-as-parent": {
            title: "Are you applying for this loan discharge as a parent",
            type: "boolean",
          },
          "attend-date": {
            format: "date",
            title:
              "On what date did you (or the student) begin attending the school?",
            type: "string",
          },
          "attend-entrance-exam": {
            title:
              "Before you (or the student) enrolled in the college, were you given an entrance exam?",
            type: "boolean",
          },
          "attend-entrance-exam-improper": {
            title:
              "Did anything appear improper about the way the test was given?",
            type: "boolean",
          },
          "attend-ged-before-end": {
            title:
              "Did you (or the student) receive a GED before completing the program?",
            type: "boolean",
          },
          "attend-high-school-ged": {
            title:
              "Did you (or the student) have a high school diploma or a GED while enrolled?",
            type: "boolean",
          },
          "attend-prior-2012": {
            title:
              "Did you (or the student) attend college prior to July 1, 2012?",
            type: "boolean",
          },
          "attend-program": {
            title: "What was your (or the student's) program of study?",
            type: "boolean",
          },
          "attend-remedial": {
            title:
              "Did you (or the student) complete a remedial program at the school?",
            type: "boolean",
          },
          "attend-time": {
            title:
              "Did you (or the student) successfully complete 6 credit hours or 225 clock hours of coursework that applied toward a program offered by the school before you received a Direct or a FFEL loan?",
            type: "boolean",
          },
          "attend-when-enroll": {
            format: "date",
            title: "When did you first enroll in college?",
            type: "string",
          },
          "improper-exam": {
            properties: {
              "provide-contact-person": {
                title:
                  "Please provide a name, address, and phone number for that person.",
                type: "boolean",
              },
            },
            title:
              "Can anyone support the statement that the test was not given properly?",
            type: "object",
          },
          "officially-registered-prior-2012": {
            title:
              "Were you (or the student), prior to July 1, 2012, officially registered in college and scheduled to attend?",
            type: "boolean",
          },
        },
        required: ["attend-date", "attend-when-enroll", "attend-program"],
        title: "False Certification - Ability to Benefit",
        type: "object",
      },
    },
  },
  ui: {
    ...sharedSchema.ui,
  },
};

const log = type => console.log.bind(console, type);

const DisputeTaxesC = () => (
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

export default DisputeTaxesC;
