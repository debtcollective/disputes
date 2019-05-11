import NumberFormat from "react-number-format";
import React from "react";

const NumberField = props => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      data-testid="number-field"
      allowNegative={false}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.floatValue,
          },
        });
      }}
      thousandSeparator
      prefix="$"
      {...other}
    />
  );
};

export default NumberField;
