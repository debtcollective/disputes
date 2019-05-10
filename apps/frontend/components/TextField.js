import React, { useState } from "react";
import get from "lodash/get";
import includes from "lodash/includes";
import { TextField } from "@material-ui/core";
import DateField from "./DateField";
import NumberField from "./NumberField";

const getLabelText = ({ label, required }) => {
  const suffix = required ? " *" : "";

  return `${label}${suffix}`;
};

const getInputType = schema => {
  const resolversByType = {
    string: schema => (schema.format === "date" ? "date" : "text"),
    number: () => "number"
  };

  return resolversByType[schema.type](schema);
};

const getInputProps = ({ inputType }) => {
  if (includes(["date"], inputType)) {
    return {
      InputLabelProps: { shrink: true }
    };
  }

  if (includes(["number"], inputType)) {
    return {
      type: "text",
      InputProps: {
        inputComponent: props => <NumberField {...props} />
      }
    };
  }

  return {};
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
    rawDescription,
    rawErrors,
    uiSchema
  } = props;

  const [inputValue, setInputValue] = useState("");
  const inputType = getInputType(schema);
  const hasError = rawErrors !== undefined;

  if (inputType === "date") {
    return <DateField {...props} />;
  }

  return (
    <div data-testid={id} className={classNames}>
      {rawDescription && <Typography>{rawDescription}</Typography>}
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) return null;

        return (
          <React.Fragment>
            <TextField
              error={hasError}
              type={inputType}
              autoComplete="no"
              id={`MU_${id}`}
              helperText={hasError ? rawErrors : help}
              label={getLabelText(props)}
              margin="normal"
              {...getInputProps({ inputType })}
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
