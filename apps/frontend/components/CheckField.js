import _ from "lodash";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const CheckField = props => {
  const {
    children,
    classNames,
    schema,
    id,
    label,
    rawDescription,
    rawErrors,
    rawHelp,
    required,
  } = props;

  const [checkedValues, setCheckedValues] = useState([]);
  const hasError = rawErrors !== undefined;

  return (
    <div data-testid={id} className={classNames}>
      {rawDescription && <Typography>{rawDescription}</Typography>}
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) return null;

        return (
          <FormControl
            error={hasError}
            required={required}
            component="fieldset"
            data-testid="checkbox"
          >
            <FormLabel component="legend">{label}</FormLabel>
            <FormGroup>
              {schema.items.enum.map((optionValue, index) => (
                <FormControlLabel
                  key={`${id}-${optionValue}-${index}`}
                  value={`${optionValue}`}
                  control={
                    <Checkbox
                      checked={_.includes(checkedValues, optionValue)}
                      onChange={e => {
                        let newValueSet = [];

                        if (_.includes(checkedValues, optionValue)) {
                          newValueSet = _.difference(checkedValues, [
                            optionValue,
                          ]);
                        } else {
                          newValueSet = checkedValues.concat(e.target.value);
                        }

                        setCheckedValues(newValueSet);
                        child.props.onChange(newValueSet);
                      }}
                      value={optionValue}
                    />
                  }
                  label={_.get(
                    schema,
                    `items.enumNames[${index}]`,
                    optionValue
                  )}
                />
              ))}
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
