import CheckField from "../CheckField";
import React from "react";
import {
  cleanup,
  fireEvent,
  render as renderRtl,
} from "@testing-library/react";

describe("<CheckField />", () => {
  const onChange = jest.fn();
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

  const render = props => {
    return renderRtl(
      <CheckField {...props}>
        <input
          onChange={onChange}
          className="form-control"
          id={baseProps.id}
          label={baseProps.label}
        />
      </CheckField>
    );
  };

  afterEach(cleanup);

  it("supports to render a group of options", () => {
    const wrapper = render({ ...baseProps });

    expect(wrapper.getByText(/foo/i)).toBeTruthy();
    expect(wrapper.getByText(/bar/i)).toBeTruthy();
    expect(wrapper.getByText(/zoo/i)).toBeTruthy();
  });

  it("click a checkbox triggers input onChange callback", () => {
    const wrapper = render({ ...baseProps });

    fireEvent.click(wrapper.getByLabelText(/bar/i));
    fireEvent.click(wrapper.getByLabelText(/zoo/i));
    fireEvent.click(wrapper.getByLabelText(/bar/i));

    expect(onChange).toHaveBeenCalledTimes(3);
    expect(onChange).toHaveBeenNthCalledWith(1, ["bar"]);
    expect(onChange).toHaveBeenNthCalledWith(2, ["bar", "zoo"]);
    expect(onChange).toHaveBeenNthCalledWith(3, ["zoo"]);
  });

  it("supports to render a error message", () => {
    const props = {
      ...baseProps,
      rawErrors: ["is a required property"],
    };
    const wrapper = render({ ...props });

    expect(wrapper.getByText(/required property/i)).toBeTruthy();
  });

  it("supports to render a helper text", () => {
    const props = {
      ...baseProps,
      rawHelp: "you can set foo to whatever",
    };
    const wrapper = render({ ...props });

    expect(wrapper.getByText(/set foo to whatever/i)).toBeTruthy();
  });
});
