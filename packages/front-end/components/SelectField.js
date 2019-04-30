import React from "react";

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

  return (
    <div className={classNames}>
      <label htmlFor={id}>
        SelectField -{label}
        {required ? "*" : null}
      </label>
      {description}
      {children}
      {errors}
      {help}
    </div>
  );
};
