import RadioField from "../RadioField";
import React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";

describe("<RadioField />", () => {
  const baseProps = {
    id: "root_foo",
    label: "Foo Label",
    schema: {
      default: false,
      enum: [true, false],
      enumNames: ["Yes", "No"],
      title: " ",
      type: "boolean",
    },
    uiSchema: { "ui:widget": "radio" },
  };

  afterEach(cleanup);

  it("supports to render a group of options", () => {
    const props = { ...baseProps };
    const onChange = jest.fn();
    const wrapper = render(
      <RadioField {...props}>
        <input
          onChange={onChange}
          className="form-control"
          id={baseProps.id}
          label={baseProps.label}
        />
      </RadioField>
    );

    expect(wrapper.getByText(/yes/i)).toBeTruthy();
    expect(wrapper.getByText(/no/i)).toBeTruthy();
  });

  it("click a radio button triggers input onChange callback", () => {
    const props = { ...baseProps };
    const onChange = jest.fn();
    const wrapper = render(
      <RadioField {...props}>
        <input
          onChange={onChange}
          className="form-control"
          id={baseProps.id}
          label={baseProps.label}
        />
      </RadioField>
    );

    fireEvent.click(wrapper.getByLabelText(/no/i));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(false);
  });
});
