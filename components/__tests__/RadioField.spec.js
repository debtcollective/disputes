import "jest-dom/extend-expect";
import RadioField from "../RadioField";
import React from "react";
import {
  cleanup,
  fireEvent,
  render as renderRtl,
} from "@testing-library/react";

describe("<RadioField />", () => {
  const baseProps = {
    id: "root_foo",
    label: "Foo Label",
    schema: {
      enum: [true, false],
      enumNames: ["Yes", "No"],
      title: " ",
      type: "boolean",
    },
    uiSchema: { "ui:widget": "radio" },
  };

  afterEach(cleanup);

  const render = (props, onChange = jest.fn()) =>
    renderRtl(
      <RadioField {...props}>
        <input
          onChange={onChange}
          className="form-control"
          id={baseProps.id}
          label={baseProps.label}
        />
      </RadioField>
    );

  it("supports to render a group of options", () => {
    const props = { ...baseProps };
    const onChange = jest.fn();
    const wrapper = render(props, onChange);

    expect(wrapper.getByText(/yes/i)).toBeTruthy();
    expect(wrapper.getByText(/no/i)).toBeTruthy();
  });

  it("click a radio button triggers input onChange callback", () => {
    const props = { ...baseProps };
    const onChange = jest.fn();
    const wrapper = render(props, onChange);

    fireEvent.click(wrapper.getByLabelText(/no/i));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(false);
  });

  it("supports default value declaration", () => {
    const props = {
      ...baseProps,
      schema: { ...baseProps.schema, default: false },
    };
    const onChange = jest.fn();
    const wrapper = render(props, onChange);

    expect(wrapper.getByTestId(/option-false/i)).toHaveAttribute("checked");
    expect(wrapper.getByTestId(/option-true/i)).not.toHaveAttribute("checked");
  });

  it("supports to render a error message", () => {
    const props = {
      ...baseProps,
      rawErrors: ["is a required property"],
    };
    const wrapper = render(props);

    expect(wrapper.getByText(/required property/i)).toBeTruthy();
  });

  it("supports to render a helper text", () => {
    const props = {
      ...baseProps,
      rawHelp: "you can set foo to whatever",
    };
    const wrapper = render(props);

    expect(wrapper.getByText(/set foo to whatever/i)).toBeTruthy();
  });
});
