import NumberFormat from "react-number-format";
import React from "react";

const getPropsByFormat = format => {
  switch (format) {
    case "telephone":
      return {
        format: "+1 (###) ###-####",
        mask: "_",
      };
    case "currency":
      return {
        prefix: "$",
        thousandSeparator: true,
      };
    case "ssn":
      return {
        format: "###-##-####",
        mask: "_",
      };
    default:
      return {};
  }
};

const NumberField = props => {
  const { inputRef, format, onChange, ...other } = props;
  const specificFormatProps = getPropsByFormat(format);

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
      {...specificFormatProps}
      {...other}
    />
  );
};

export default NumberField;
