import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const CheckField = props => {
  const {
    children,
    classNames,
    id,
    label,
    rawDescription,
    rawErrors,
    rawHelp,
  } = props;

  const [checked, setChecked] = useState(false);
  const hasError = rawErrors !== undefined;

  return (
    <div data-testid={id} className={classNames}>
      {rawDescription && <Typography>{rawDescription}</Typography>}
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) return null;

        return (
          <FormControl component="fieldset">
            <FormGroup>
              <FormControlLabel
                data-testid="checkbox"
                control={
                  <Checkbox
                    checked={checked}
                    onChange={() => {
                      child.props.onChange(!checked);
                      setChecked(!checked);
                    }}
                  />
                }
                label={label}
              />
            </FormGroup>
            <FormHelperText error={hasError} component="div">
              {hasError ? rawErrors : rawHelp}
            </FormHelperText>
          </FormControl>
        );
      })}
    </div>
  );
};

export default CheckField;
