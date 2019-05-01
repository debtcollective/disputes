import { HiddenField } from "./styled";
import { Typography, Hidden } from "@material-ui/core";
import get from "lodash/get";
import has from "lodash/has";
import includes from "lodash/includes";
import isEmpty from "lodash/isEmpty";
import PlainTemplate from "./PlainTemplate";
import React, { useState } from "react";
import SelectField from "./SelectField";
import TextField from "@material-ui/core/TextField";

const getLabelText = ({ label, required }) => {
  const suffix = required ? " *" : "";

  return `${label}${suffix}`;
};

export default props => {
  const {
    schema,
    id,
    classNames,
    label,
    help,
    required,
    description,
    errors,
    children,
    uiSchema,
    onKeyChange,
    rawDescription,
    rawErrors
  } = props;

  const [inputValue, setInputValue] = useState("");
  const inputTypes = { string: "text", number: "number" };
  const fieldTemplateSchemaTypes = ["string", "number"];

  if (has(schema, "enum")) {
    return <SelectField {...props} />;
  }

  if (!includes(fieldTemplateSchemaTypes, get(schema, "type"))) {
    return <PlainTemplate {...props} />;
  }

  return (
    <div data-testid={id} className={classNames}>
      {rawDescription && <Typography>{rawDescription}</Typography>}
      {rawErrors && errors}
      {React.Children.map(children, child => {
        return React.isValidElement(child) ? (
          <React.Fragment>
            <TextField
              type={inputTypes[schema.type]}
              autoComplete="no"
              id={`MU_${id}`}
              helperText={help}
              label={getLabelText(props)}
              margin="normal"
              onChange={e => {
                child.props.onChange(e.target.value);
                setInputValue(e.target.value);
              }}
              value={inputValue}
            />
          </React.Fragment>
        ) : null;
      })}
    </div>
  );
};
