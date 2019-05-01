import React, { useState } from "react";
import get from "lodash/get";
import { Button, Menu, MenuItem, Select } from "@material-ui/core";

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

  const [option, setOption] = useState("");
  const handleOptionSelection = (value, callback) => {
    callback(value);
    setOption(value);
  };
  const customId = `MU_${id}`;

  return (
    <div data-testid="select-field">
      <div data-testid={id} className={classNames}>
        {rawDescription && <Typography>{rawDescription}</Typography>}
        {rawErrors && errors}
        {React.Children.map(children, child => {
          if (!React.isValidElement(child)) return null;

          return (
            <div id={customId}>
              <Select
                value={option}
                onChange={e =>
                  handleOptionSelection(e.target.value, child.props.onChange)
                }
                displayEmpty
              >
                <MenuItem value="">
                  {get(uiSchema, "ui:placeholder", "select")}
                </MenuItem>
                {schema.enum.map((option, index) => (
                  <MenuItem key={option} value={option}>
                    {get(schema, `enumNames[${index}]`, `Option ${index}`)}
                  </MenuItem>
                ))}
              </Select>
            </div>
          );
        })}
      </div>
    </div>
  );
};
