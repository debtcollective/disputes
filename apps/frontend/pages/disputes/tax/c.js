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
          "atb-applying-as-group": {
            dependencies: {
              "atb-applying-as": {
                oneOf: [
                  {
                    properties: {
                      "atb-applying-as": {
                        enum: [false],
                      },
                    },
                  },
                  {
                    properties: {
                      "atb-applying-as": {
                        enum: [true],
                      },
                      "atb-student-name": {
                        title: "Student name (Last, First, MI)",
                        type: "string",
                      },
                      "atb-student-ssn": {
                        title: "Student SSN",
                        type: "string",
                      },
                    },
                    required: ["atb-student-name", "atb-student-ssn"],
                  },
                ],
              },
            },
            properties: {
              "atb-applying-as": {
                enum: [true, false],
                enumNames: ["Yes", "No"],
                title: " ",
                type: "boolean",
              },
            },
            title: "Are you applying for this loan discharge as a parent?",
            type: "object",
          },
          // if no "Sorry, you are not eligible for this discharge."
          "atb-attended-at": {
            title:
              "Did you (or the student) attend college prior to July 1, 2012?",
            type: "boolean",
          },
          // if no "Sorry, you are not eligible for this discharge."
          "atb-attended-where": {
            title:
              "Were you (or the student), prior to July 1, 2012, officially registered in college and scheduled to attend?",
            type: "boolean",
          },
          // if no "Sorry, you are not eligible for this discharge."
          "atb-complete-credit": {
            title:
              "Did you (or the student) successfully complete 6 credit hours or 225 clock hours of coursework that applied toward a program offered by the school before you received a Direct or a FFEL loan?",
            type: "boolean",
          },
          "atb-enrolled-at": {
            format: "date",
            title: "When did you first enroll in college?",
            type: "string",
          },
          "atb-entrance-exam-group": {
            dependencies: {
              "atb-entrance-exam": {
                oneOf: [
                  {
                    properties: {
                      "atb-entrance-exam": {
                        enum: [false],
                      },
                    },
                  },
                  {
                    properties: {
                      "atb-entrance-exam": {
                        enum: [true],
                      },
                      "atb-entrance-exam-date": {
                        format: "date",
                        title: "Give the date you took the test if you know it",
                        type: "string",
                      },
                      "atb-entrance-exam-name": {
                        title: "Give the name of the test if you know it",
                        type: "string",
                      },
                      "atb-entrance-exam-score": {
                        title: "Give the score of the test if you know it",
                        type: "string",
                      },
                    },
                    required: [
                      "atb-entrance-exam-date",
                      "atb-entrance-exam-name",
                      "atb-entrance-exam-score",
                    ],
                  },
                ],
              },
            },
            properties: {
              "atb-entrance-exam": {
                enum: [true, false],
                enumNames: ["Yes", "No"],
                title: " ",
                type: "boolean",
              },
            },
            title:
              "Before you (or the student) enrolled in the college, were you given an entrance exam?",
            type: "object",
          },
          "atb-entrance-exam-improper": {
            title:
              "Did anything appear improper about the way the test was given?",
            type: "boolean",
          },
          "atb-entrance-exam-radio-option": {
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
          "atb-have-ged": {
            title:
              "Did you (or the student) have a high school diploma or a GED while enrolled?",
            type: "boolean",
          },
          "atb-program-of-study": {
            title: "What was your (or the student's) program of study?",
            type: "boolean",
          },
          "atb-remedial-program-completed": {
            title:
              "Did you (or the student) complete a remedial program at the school?",
            type: "boolean",
          },
          "atb-school-date": {
            format: "date",
            title:
              "On what date did you (or the student) begin attending the school?",
            type: "string",
          },
          "attend-ged-before-end": {
            title:
              "Did you (or the student) receive a GED before completing the program?",
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
    atb: {
      "atb-applying-as-group": {
        "atb-applying-as": {
          "ui:widget": "radio",
        },
      },
      "atb-entrance-exam-group": {
        "atb-entrance-exam": {
          "ui:widget": "radio",
        },
      },
    },
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
