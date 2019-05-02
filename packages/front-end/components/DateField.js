import React, { useState } from "react";
import get from "lodash/get";
import includes from "lodash/includes";
import { TextField } from "@material-ui/core";
import { DatePicker } from "material-ui-pickers";

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

  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <div data-testid={id} className={classNames}>
      {rawDescription && <Typography>{rawDescription}</Typography>}
      {rawErrors && errors}
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) return null;

        return (
          <React.Fragment>
            <div id={`#MU_${id}`}>
              <DatePicker
                value={selectedDate}
                onChange={momentDate => {
                  const value = momentDate.format();
                  child.props.onChange(value);
                  handleDateChange(value);
                }}
              />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
