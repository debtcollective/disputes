import React from "react";

const PlainTemplate = props => {
  const {
    id,
    classNames,
    label,
    help,
    required,
    description,
    errors,
    children,
  } = props;

  return (
    <div data-testid="plain-template" className={classNames}>
      <label htmlFor={id}>
        {label}
        {required ? "*" : null}
      </label>
      {description}
      {children}
      {errors}
      {help}
    </div>
  );
};

export default PlainTemplate;
