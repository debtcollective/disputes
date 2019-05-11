import { DatePicker } from "material-ui-pickers";
import { FormHelperText, Typography } from "@material-ui/core";
import React, { useState } from "react";

const DateField = props => {
  const {
    children,
    classNames,
    id,
    label,
    rawDescription,
    rawErrors,
    rawHelp,
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
                placeholder={label}
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

export default DateField;
