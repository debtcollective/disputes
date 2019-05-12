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
                        title: "Your State",
                      },
                      "zip-code": {
                        pattern: "[0-9]{5}",
                        title: "Zip Code",
                        type: "string",
                      },
                    },
                    title: "Guaranty Agency details",
                    type: "object",
                  },
                },
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
      personalInformation: {
        description: "Let’s get started, tell us about you",
        properties: {
          ...personalInfo,
        },
        title: "Personal Information",
        type: "object",
      },
      yourSchool: {
        description: "Name of the school where you incurred the debt",
        properties: {},
        title: "Your School",
        type: "object",
      },
    },
    title: "Dispute Your Tax Return Being Taken",
    type: "object",
  },
  ui: {
    FFELLoan: { "ui:order": ["*"] },
    personalInformation: { "ui:order": ["*"] },
    "ui:order": ["personalInformation", "yourSchool", "FFELLoan", "*"],
    yourSchool: { "ui:order": ["*"] },
  },
};

const log = type => console.log.bind(console, type);

const DisputeTaxesA = () => (
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

export default DisputeTaxesA;
