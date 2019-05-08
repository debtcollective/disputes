import get from "lodash/get";
import has from "lodash/has";
import includes from "lodash/includes";
import PlainTemplate from "./PlainTemplate";
import React, { useState } from "react";
import SelectField from "./SelectField";
import TextField from "./TextField";

export default props => {
  const { schema } = props;

  if (has(schema, "enum")) {
    return <SelectField {...props} />;
  }

  if (includes(["string", "number"], get(schema, "type"))) {
    return <TextField {...props} />;
  }

  return <PlainTemplate {...props} />;
};
