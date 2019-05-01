import React, { useState } from "react";
import get from "lodash/get";
import { Button, Menu, MenuItem } from "@material-ui/core";

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

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClose = () => setAnchorEl(null);
  const handleItemSelection = (option, callback) => {
    callback(option);
    handleClose();
  };
  const toggle = e => setAnchorEl(e.currentTarget);
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
              <Button
                aria-owns={anchorEl ? `${customId}-menu` : undefined}
                aria-haspopup="true"
                onClick={toggle}
              >
                {get(uiSchema, "ui:placeholder", "select")}
              </Button>
              <Menu
                id={`${customId}-menu`}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {schema.enum.map((option, index) => (
                  <MenuItem
                    key={option}
                    onClick={() =>
                      handleItemSelection(option, child.props.onChange)
                    }
                  >
                    {get(schema, `enumNames[${index}]`, `Option ${index}`)}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          );
        })}
      </div>
    </div>
  );
};
