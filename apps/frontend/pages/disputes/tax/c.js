import debtTypes from "../../../lib/disputes/dispute-types";
import FieldTemplate from "../../../components/FieldTemplate";
import Form from "react-jsonschema-form";
import personalInfo from "../../../lib/disputes/personal-info";
import React from "react";
import usaStates from "../../../lib/disputes/usa-states";

const schemas = {
  json: {
    $schema: "http://json-schema.org/schema#",
    definitions: {
      "debt-types": {
        enum: debtTypes.values,
        enumNames: debtTypes.labels,
        type: "string",
      },
      "usa-states": {
        enum: usaStates.values,
        enumNames: usaStates.labels,
        type: "string",
      },
    },
    properties: {
      FFELLoan: {
        dependencies: {
          ffelHolder: {
            oneOf: [
              {
                properties: {
                  ffelHolder: {
                    enum: [false],
                  },
                },
              },
              {
                properties: {
                  ffelHolder: {
                    enum: [true],
                  },
                  guarantyAgency: {
                    properties: {
                      address: {
                        title: "Address",
                        type: "string",
                      },
                      city: {
                        title: "City",
                        type: "string",
                      },
                      name: {
                        title: "Name",
                        type: "string",
                      },
                      state: {
                        $ref: "#/definitions/usa-states",
                        title: "State",
                      },
                      "zip-code": {
                        pattern: "[0-9]{5}",
                        title: "Zip Code",
                        type: "string",
                      },
                    },
                    required: ["address", "city", "name", "state", "zip-code"],
                    title: "Guaranty Agency details",
                    type: "object",
                  },
                },
                required: ["ffelHolder", "guarantyAgency"],
              },
            ],
          },
        },
        properties: {
          ffelHolder: {
            description:
              "If you have a FFEL loan, add the name and address of your guaranty agency in the box below. The name and address may appear on the tax offset notice you received in the mail. If you don't know the name and address of your guarantor, you can contact the Department of Education or call 1-800-304-3107 and ask for this information.",
            title: "Are you a FFEL holder?",
            type: "boolean",
          },
        },
        title: "FFEL Loan",
        type: "object",
      },
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
            type: "string",
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
      personalInformation: {
        description: "Let’s get started, tell us about you",
        properties: {
          ...personalInfo,
        },
        required: [
          "address",
          "birthday",
          "city",
          "email",
          "name",
          "ssn",
          "state",
          "telephone",
          "telephoneAlt",
          "zip-code",
        ],
        title: "Personal Information",
        type: "object",
      },
      yourSchool: {
        description:
          "Information related to the school where you incurred the debt",
        properties: {
          address: {
            title: "Address",
            type: "string",
          },
          attend: {
            properties: {
              from: {
                format: "date",
                title: "from",
                type: "string",
              },
              to: {
                format: "date",
                title: "to",
                type: "string",
              },
            },
            required: ["from", "to"],
            title: "When did you attend the school?",
            type: "object",
          },
          city: {
            title: "City",
            type: "string",
          },
          name: {
            title: "Name",
            type: "string",
          },
          state: {
            $ref: "#/definitions/usa-states",
            title: "State",
          },
          "zip-code": {
            pattern: "[0-9]{5}",
            title: "Your Zip Code",
            type: "string",
          },
        },
        required: ["address", "attend", "city", "name", "state", "zip-code"],
        title: "Your School",
        type: "object",
      },
    },
    title: "Dispute Your Tax Return Being Taken",
    type: "object",
  },
  ui: {
    FFELLoan: { "ui:order": ["*"] },
    personalInformation: {
      "ui:order": [
        "name",
        "ssn",
        "address",
        "city",
        "state",
        "zip-code",
        "birthday",
        "email",
        "*",
      ],
    },
    "ui:order": ["personalInformation", "yourSchool", "FFELLoan", "*"],
    yourSchool: {
      "ui:order": ["name", "address", "city", "state", "zip-code", "*"],
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
