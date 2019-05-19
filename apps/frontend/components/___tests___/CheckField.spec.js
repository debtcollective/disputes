import CheckField from "../CheckField";
import React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";

describe("<CheckField />", () => {
  const baseProps = {
    id: "root_checkboxes",
    label: "Choose:",
    schema: {
      items: {
        enum: ["foo", "bar", "zoo"],
        enumNames: ["Foo", "Bar", "Zoo"],
      },
      title:
        "You believe your loan should not be paid because of a violation of state regulations related to your:",
      type: "array",
      uniqueItems: true,
    },
    uiSchema: { "ui:widget": "checkboxes" },
  };

  afterEach(cleanup);

  it("supports to render a group of options", () => {
    const props = { ...baseProps };
    const onChange = jest.fn();
    const wrapper = render(
      <CheckField {...props}>
        <input
          onChange={onChange}
          className="form-control"
          id={baseProps.id}
          label={baseProps.label}
        />
      </CheckField>
    );

    expect(wrapper.getByText(/foo/i)).toBeTruthy();
    expect(wrapper.getByText(/bar/i)).toBeTruthy();
    expect(wrapper.getByText(/zoo/i)).toBeTruthy();
  });

  it("click a checkbox triggers input onChange callback", () => {
    const props = { ...baseProps };
    const onChange = jest.fn();
    const wrapper = render(
      <CheckField {...props}>
        <input
          onChange={onChange}
          className="form-control"
          id={baseProps.id}
          label={baseProps.label}
        />
      </CheckField>
    );

    fireEvent.click(wrapper.getByLabelText(/bar/i));
    fireEvent.click(wrapper.getByLabelText(/zoo/i));
    fireEvent.click(wrapper.getByLabelText(/bar/i));

    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChange).toHaveBeenNthCalledWith(1, ["bar"]);
    expect(onChange).toHaveBeenNthCalledWith(2, ["bar", "zoo"]);
    expect(onChange).toHaveBeenNthCalledWith(1, ["bar"]);
    expect(onChange).toHaveBeenNthCalledWith(3, ["zoo"]);
  });
});
