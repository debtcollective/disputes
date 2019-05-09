import React from "react";
import Form from "react-jsonschema-form";
import debtTypes from "../../../lib/disputes/dispute-types";
import usaStates from "../../../lib/disputes/usa-states";
import FieldTemplate from "../../../components/FieldTemplate";
import personalInfo from "../../../lib/disputes/personal-info";

const schemas = {
  json: {
    definitions: {
      "debt-types": {
        type: "string",
        enum: debtTypes.values,
        enumNames: debtTypes.labels
      },
      "usa-states": {
        type: "string",
        enumNames: usaStates.labels,
        enum: usaStates.values
      }
    },
    $schema: "http://json-schema.org/schema#",
    title: "Dispute Your Tax Return Being Taken",
    type: "object",
    properties: {
      personalInformation: {
        title: "Personal Information",
        description: "Let’s get started, tell us about you",
        type: "object",
        properties: {
          ...personalInfo
        }
      },
      yourSchool: {
        title: "Your School",
        desciption: "Name of the school where you incurred the debt",
        type: "object",
        properties: {}
      },
      FFELLoan: {
        title: "FFEL Loan",
        description:
          "If you have a FFEL loan, add the name and address of your guaranty agency in the box below. The name and address may appear on the tax offset notice you received in the mail. If you don't know the name and address of your guarantor, you can contact the Department of Education or call 1-800-304-3107 and ask for this information.",
        type: "object",
        properties: {}
      }
    }
  },
  ui: {
    "ui:order": ["*"],
    personalInformation: {
      "ui:order": ["*"]
    },
    yourSchool: {
      "ui:order": ["*"]
    },
    FFELLoan: {
      "ui:order": ["*"]
    }
  }
};

const log = type => console.log.bind(console, type);

export default () => (
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
