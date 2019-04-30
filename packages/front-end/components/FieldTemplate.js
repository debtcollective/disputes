import React from "react";
import has from "lodash/has";
import SelectField from "./SelectField";

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
    children
  } = props;

  if (has(schema, "enum")) {
    return <SelectField {...props} />;
  }

  return (
    <div className={classNames}>
      <label htmlFor={id}>
        FieldTemplate -{label}
        {required ? "*" : null}
      </label>
      {description}
      {children}
      {errors}
      {help}
    </div>
  );
};
