import React from "react";
import NumberFormat from "react-number-format";

const NumberField = props => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      allowNegative={false}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.floatValue
          }
        });
      }}
      thousandSeparator
      prefix="$"
    />
  );
};

export default NumberField;