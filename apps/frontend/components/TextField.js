import DateField from "./DateField";
import includes from "lodash/includes";
import NumberField from "./NumberField";
import { TextField as MUTextField, Typography } from "@material-ui/core";
import React, { useState } from "react";

const getLabelText = ({ label, required }) => {
  const suffix = required ? " *" : "";

  return `${label}${suffix}`;
};

const getInputType = schema => {
  const resolversByType = {
    number: () => "number",
    string: schema => (schema.format === "date" ? "date" : "text"),
  };

  return resolversByType[schema.type](schema);
};

const getInputProps = ({ inputType }) => {
  if (includes(["date"], inputType)) {
    return {
      InputLabelProps: { shrink: true },
    };
  }

  if (includes(["number"], inputType)) {
    return {
      InputProps: {
        inputComponent: function NumberFieldWrapper(props) {
          return <NumberField {...props} />;
        },
      },
      type: "text",
    };
  }

  return {};
};

const TextField = props => {
  const {
    schema,
    id,
    classNames,
    help,
    children,
    rawDescription,
    rawErrors,
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
            <MUTextField
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

export default TextField;
