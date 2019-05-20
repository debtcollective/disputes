import CheckField from "./CheckField";
import has from "lodash/has";
import includes from "lodash/includes";
import PlainTemplate from "./PlainTemplate";
import RadioField from "./RadioField";
import React from "react";
import SelectField from "./SelectField";
import TextField from "./TextField";

const FieldTemplate = props => {
  const { schema, uiSchema } = props;

  if (has(uiSchema, "ui:widget")) {
    switch (uiSchema["ui:widget"]) {
      case "radio":
        return <RadioField {...props} />;
      case "checkboxes":
        return <CheckField {...props} />;
      default:
        return <PlainTemplate {...props} />;
    }
  }

  if (has(schema, "enum")) {
    return <SelectField {...props} />;
  }

  if (includes(["string", "number"], schema.type)) {
    return <TextField {...props} />;
  }

  return <PlainTemplate {...props} />;
};

export default FieldTemplate;
