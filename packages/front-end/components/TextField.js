import React, { useState } from "react";
import get from "lodash/get";
import includes from "lodash/includes";
import { TextField } from "@material-ui/core";

/**
 * Helper to return the right text to render as field labels
 */
const getLabelText = ({ label, required }) => {
  const suffix = required ? " *" : "";

  return `${label}${suffix}`;
};

/**
 * Map of possible schema properties type to their pairs of
 * input types in order to render the right custom component
 */
const inputTypes = {
  string: schema => (schema.format === "date" ? "date" : "text"),
  number: () => "number"
};

/**
 * Collection of input types that requires shrinked label
 */
const labelShrinkTypes = ["date"];

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
    rawDescription,
    rawErrors,
    uiSchema
  } = props;

  const [inputValue, setInputValue] = useState("");
  const inputType = inputTypes[schema.type](schema);

  return (
    <div data-testid={id} className={classNames}>
      {rawDescription && <Typography>{rawDescription}</Typography>}
      {rawErrors && errors}
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) return null;

        return (
          <React.Fragment>
            <TextField
              type={inputType}
              autoComplete="no"
              id={`MU_${id}`}
              helperText={help}
              label={getLabelText(props)}
              margin="normal"
              InputLabelProps={{
                shrink: includes(labelShrinkTypes, inputType)
              }}
              onChange={e => {
                child.props.onChange(e.target.value);
                setInputValue(e.target.value);
              }}
              value={inputValue}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};
