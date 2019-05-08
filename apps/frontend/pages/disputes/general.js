import React from "react";
import Form from "react-jsonschema-form";
import debtTypes from "../../lib/disputes/dispute-types";
import usaStates from "../../lib/disputes/usa-states";
import FieldTemplate from "../../components/FieldTemplate";

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
    title: "Dispute Any Debt in Collections",
    description:
      "This dispute is for all types of debt in collections except student loans.",
    type: "object",
    properties: {
      debts: {
        title: "Amount of Debt Disputed",
        description:
          "Please provide the amount of debt collectors claim you owe. This will help us better understand the types of debt you and our members are fighting. ",
        type: "object",
        properties: {
          debtType: {
            type: "string",
            title: "Debt Type",
            $ref: "#/definitions/debt-types"
          },
          debtAmount: {
            title: "Amount",
            type: "number"
          }
        },
        required: ["debtType", "debtAmount"],
        dependencies: {
          debtType: {
            oneOf: [
              {
                properties: {
                  debtType: {
                    title: debtTypes.labels[0],
                    enum: [debtTypes.values[0]]
                  }
                }
              },
              {
                properties: {
                  debtType: {
                    title: debtTypes.labels[1],
                    enum: [debtTypes.values[1]]
                  }
                }
              },
              {
                properties: {
                  debtType: {
                    title: debtTypes.labels[2],
                    enum: [debtTypes.values[2]]
                  },
                  debtDescription: {
                    title: "Description",
                    type: "string"
                  }
                }
              }
            ]
          }
        }
      },
      personalInformation: {
        title: "Personal Information",
        type: "object",
        required: [
          "address",
          "agency-address",
          "agency-city",
          "agency-name",
          "agency-state",
          "agency-zip-code",
          "city",
          "name",
          "state",
          "zip-code"
        ],
        properties: {
          address: {
            type: "string",
            title: "Your Mailing Address"
          },
          "agency-address": {
            type: "string",
            title: "Collection agency’s or law firm’s mailing address"
          },
          "agency-city": {
            type: "string",
            title: "Collection agency’s or law firm’s City"
          },
          "agency-name": {
            type: "string",
            title: "Name of collection agency or law firm"
          },
          "agency-state": {
            $ref: "#/definitions/usa-states",
            title: "Collection agency’s or law firm’s State"
          },
          "agency-zip-code": {
            type: "string",
            title: "Collection agency’s or law firm’s Zip Code",
            pattern: "[0-9]{5}"
          },
          city: {
            type: "string",
            title: "Your City"
          },
          name: {
            type: "string",
            title: "Your Full Name"
          },
          state: {
            title: "Your State",
            $ref: "#/definitions/usa-states"
          },
          "zip-code": {
            title: "Your Zip Code",
            type: "string",
            pattern: "[0-9]{5}"
          }
        }
      },
      collectionNotice: {
        title: "Collection notice",
        type: "object",
        required: ["collection-notice-date"],
        properties: {
          "collection-notice-date": {
            type: "string",
            title: "Collection notice date",
            format: "date"
          }
        }
      }
    }
  },
  ui: {
    "ui:order": ["*", "debts", "personalInformation", "collectionNotice"],
    debts: {
      debtType: {
        "ui:placeholder": "Select one",
        "ui:help": 'If you don\'t see your type of debt, choose "Other"'
      },
      debtAmount: {
        classNames: "prefix-currency"
      }
    },
    personalInformation: {
      "ui:order": [
        "name",
        "address",
        "city",
        "state",
        "zip-code",
        "agency-name",
        "agency-address",
        "agency-city",
        "agency-state",
        "agency-zip-code"
      ],
      address: {
        "ui:placeholder": "Street, unit number, floor, door number"
      },
      name: {
        "ui:placeholder": "Jane Doe"
      },
      city: {
        classNames: "field-address"
      },
      state: {
        classNames: "field-address",
        "ui:placeholder": "Select one"
      },
      "zip-code": {
        classNames: "field-address"
      },
      "agency-address": {
        "ui:placeholder": "Street, unit number, floor, door number"
      },
      "agency-city": {
        classNames: "field-address"
      },
      "agency-state": {
        classNames: "field-address",
        "ui:placeholder": "Select one"
      },
      "agency-zip-code": {
        classNames: "field-address"
      }
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
