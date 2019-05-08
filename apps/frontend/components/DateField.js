import React, { useState } from "react";
import get from "lodash/get";
import includes from "lodash/includes";
import { DatePicker } from "material-ui-pickers";
import { FormHelperText } from "@material-ui/core";

export default props => {
  const {
    schema,
    id,
    classNames,
    label,
    rawHelp,
    help,
    required,
    description,
    errors,
    children,
    rawDescription,
    rawErrors,
    uiSchema
  } = props;

  const [selectedDate, handleDateChange] = useState(null);
  const hasError = rawErrors !== undefined;

  return (
    <div data-testid={id} className={classNames}>
      {rawDescription && <Typography>{rawDescription}</Typography>}
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) return null;

        return (
          <React.Fragment>
            <div id={`#MU_${id}`}>
              <DatePicker
                disableFuture
                value={selectedDate}
                onChange={momentDate => {
                  const value = momentDate.format("YYYY-MM-DD");
                  child.props.onChange(value);
                  handleDateChange(value);
                }}
              />
              <FormHelperText error={hasError} component="div">
                {hasError ? rawErrors : rawHelp}
              </FormHelperText>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
