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

  const [value, setValue] = useState();
  const hasError = rawErrors !== undefined;

  return (
    <div data-testid={id} className={classNames}>
      {rawDescription && <Typography>{rawDescription}</Typography>}
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) return null;

        return (
          <FormControl component="fieldset" data-testid="radio">
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup
              aria-label={label}
              value={value}
              onChange={e => setValue(e.target.value)}
            >
              {schema.enum.map((optionValue, index) => (
                <FormControlLabel
                  key={`${id}-${optionValue}-${index}`}
                  value={`${optionValue}`}
                  control={<Radio />}
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
