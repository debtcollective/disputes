import React from "react";
import SelectField from "../SelectField";
import { cleanup, fireEvent, render } from "react-testing-library";

describe("<SelectField />", () => {
  const baseProps = {
    id: "root_personalInformation_state",
    schema: {
      enum: ["foo", "bar"],
      enumNames: ["Foo name", "Bar ziz"],
    },
    uiSchema: {
      "ui:placeholder": "Select one",
    },
  };

  const renderSelectField = (selectProps, inputProps) =>
    render(
      <SelectField {...selectProps}>
        <select id={inputProps.id} className="form-control" {...inputProps}>
          <option value="">{inputProps.uiSchema["ui:placeholder"]}</option>
          <option value={inputProps.schema.enum[0]}>
            {inputProps.schema.enumNames[0]}
          </option>
          <option value={inputProps.schema.enum[1]}>
            {inputProps.schema.enumNames[1]}
          </option>
        </select>
      </SelectField>
    );

  afterEach(cleanup);

  it("renders a custom component in place of child select input", () => {
    const props = { ...baseProps };
    const wrapper = renderSelectField(props, baseProps);

    const childInput = wrapper.container.querySelector(`#${baseProps.id}`);
    const customInput = wrapper.container.querySelector(`#MU_${baseProps.id}`);

    expect(customInput).toBeTruthy();
    expect(childInput).toBe(null);
  });

  it("uses child select input 'onChange' when an item is selected", () => {
    const onChange = jest.fn();
    const props = { ...baseProps };
    const wrapper = renderSelectField(props, { ...baseProps, onChange });
    const button = wrapper.getByText(baseProps.uiSchema["ui:placeholder"]);

    fireEvent.click(button);

    const option = wrapper.getByText(baseProps.schema.enumNames[0]);

    fireEvent.click(option);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(baseProps.schema.enum[0]);
  });

  it("supports to render a error message", () => {
    const props = {
      ...baseProps,
      rawErrors: ["is a required property"],
    };
    const wrapper = renderSelectField(props, { ...baseProps });

    expect(wrapper.getByText(/required property/i)).toBeTruthy();
  });

  it("supports to render a helper text", () => {
    const props = {
      ...baseProps,
      rawHelp: "you can set foo to whatever",
    };
    const wrapper = renderSelectField(props, { ...baseProps });

    expect(wrapper.getByText(/set foo to whatever/i)).toBeTruthy();
  });
});
