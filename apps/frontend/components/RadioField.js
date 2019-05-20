import _ from "lodash";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const RadioField = props => {
  const {
    children,
    classNames,
    id,
    label,
    rawDescription,
    schema,
    rawErrors,
    rawHelp,
  } = props;

  // Values by default need to be handle has strings
  const defaultValue = `${_.get(schema, "default")}`;
  const [value, setValue] = useState(defaultValue);
  const hasError = rawErrors !== undefined;

  return (
    <div data-testid={id} className={classNames}>
      {rawDescription && <Typography>{rawDescription}</Typography>}
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) return null;

        return (
          <FormControl
            error={hasError}
            component="fieldset"
            data-testid="radio"
          >
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup
              aria-label={_.isEmpty(label) ? label : id}
              name={child.props.name}
              value={value}
              onChange={e => {
                setValue(e.target.value);
                // Allow to keep the same type asked by the Schema
                let value =
                  schema.type === "boolean"
                    ? JSON.parse(e.target.value)
                    : e.target.value;
                child.props.onChange(value);
              }}
            >
              {schema.enum.map((optionValue, index) => (
                <FormControlLabel
                  key={`${id}-${optionValue}-${index}`}
                  value={`${optionValue}`}
                  control={
                    <Radio
                      inputProps={{ "data-testid": `option-${optionValue}` }}
                    />
                  }
                  label={_.get(schema, `enumNames[${index}]`, optionValue)}
                />
              ))}
            </RadioGroup>
            <FormHelperText error={hasError} component="div">
              {hasError ? rawErrors : rawHelp}
            </FormHelperText>
          </FormControl>
        );
      })}
    </div>
  );
};

export default RadioField;
