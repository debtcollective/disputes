import has from "lodash/has";
import includes from "lodash/includes";
import PlainTemplate from "./PlainTemplate";
import React from "react";
import SelectField from "./SelectField";
import TextField from "./TextField";

const FieldTemplate = props => {
  const { schema } = props;

  if (has(schema, "enum")) {
    return <SelectField {...props} />;
  }

  if (includes(["string", "number"], schema.type)) {
    return <TextField {...props} />;
  }

  return <PlainTemplate {...props} />;
};

export default FieldTemplate;
