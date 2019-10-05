import React from "react";

const PlainTemplate = props => {
  const { id, classNames, label, help, required, errors, children } = props;

  const isObjectType = props.schema.type === "object";

  return (
    <div data-testid="plain-template" className={classNames}>
      {!isObjectType && (
        <label htmlFor={id}>
          {label}
          {required ? "*" : null}
        </label>
      )}
      {children}
      {errors}
      {help}
    </div>
  );
};

export default PlainTemplate;
