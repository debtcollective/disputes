import React from "react";
import SelectField from "../SelectField";
import { render, fireEvent, cleanup } from "react-testing-library";

describe("<SelectField />", () => {
  const baseProps = {
    id: "root_personalInformation_state",
    schema: {
      enum: ["foo", "bar"],
      enumNames: ["Foo name", "Bar ziz"]
    },
    uiSchema: {
      "ui:placeholder": "Select one"
    }
  };

  afterEach(cleanup);

  it("renders a custom component in place of child select input", () => {
    const props = { ...baseProps };
    const wrapper = render(
      <SelectField {...props}>
        <select id={baseProps.id} className="form-control" {...baseProps}>
          <option value="">{baseProps.uiSchema["ui:placeholder"]}</option>
          <option value={baseProps.schema.enum[0]}>
            {baseProps.schema.enumNames[0]}
          </option>
          <option value={baseProps.schema.enum[1]}>
            {baseProps.schema.enumNames[1]}
          </option>
        </select>
      </SelectField>
    );

    const childInput = wrapper.container.querySelector(`#${baseProps.id}`);
    const customInput = wrapper.container.querySelector(`#MU_${baseProps.id}`);

    expect(customInput).toBeTruthy();
    expect(childInput).toBe(null);
  });

  it("uses child select input 'onChange' when an item is selected", () => {
    const onChange = jest.fn();
    const props = { ...baseProps };
    const wrapper = render(
      <SelectField {...props}>
        <select
          id={baseProps.id}
          className="form-control"
          {...baseProps}
          onChange={onChange}
        >
          <option value="">{baseProps.uiSchema["ui:placeholder"]}</option>
          <option value={baseProps.schema.enum[0]}>
            {baseProps.schema.enumNames[0]}
          </option>
          <option value={baseProps.schema.enum[1]}>
            {baseProps.schema.enumNames[1]}
          </option>
        </select>
      </SelectField>
    );
    const customId = `#MU_${baseProps.id}`;
    const button = wrapper.getByText(baseProps.uiSchema["ui:placeholder"]);

    fireEvent.click(button);

    const option = wrapper.getByText(baseProps.schema.enumNames[0]);

    fireEvent.click(option);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(baseProps.schema.enum[0]);
  });
});
