import get from "lodash/get";
import {
  FormHelperText,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const SelectField = props => {
  const {
    label,
    schema,
    id,
    classNames,
    children,
    rawHelp,
    rawDescription,
    rawErrors,
    uiSchema,
  } = props;

  const [option, setOption] = useState("");
  const handleOptionSelection = (value, callback) => {
    callback(value);
    setOption(value);
  };
  const hasError = rawErrors !== undefined;
  const customId = `MU_${id}`;

  return (
    <div data-testid="select-field">
      <div data-testid={id} className={classNames}>
        {rawDescription && <Typography>{rawDescription}</Typography>}
        {React.Children.map(children, child => {
          if (!React.isValidElement(child)) return null;

          return (
            <div id={customId}>
              <Select
                fullWidth
                error={hasError}
                value={option}
                onChange={e =>
                  handleOptionSelection(e.target.value, child.props.onChange)
                }
                displayEmpty
              >
                <MenuItem value="" disabled>
                  {get(uiSchema, "ui:placeholder", `Select ${label}`)}
                </MenuItem>
                {schema.enum.map((option, index) => (
                  <MenuItem key={option} value={option}>
                    {get(schema, `enumNames[${index}]`, `Option ${index}`)}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText error={hasError} component="div">
                {hasError ? rawErrors : rawHelp}
              </FormHelperText>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectField;
