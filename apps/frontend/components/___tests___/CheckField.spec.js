import CheckField from "../CheckField";
import React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";

describe("<CheckField />", () => {
  const baseProps = {
    id: "root_foo",
    label: "Foo Label",
  };

  afterEach(cleanup);

  const props = {
    ...baseProps,
    schema: { format: "telephone", type: "boolean" },
  };

  it("triggers input onChange callback on click", () => {
    const onChange = jest.fn();
    const wrapper = render(
      <CheckField {...props}>
        <input
          onChange={onChange}
          className="form-control"
          id={baseProps.id}
          label={baseProps.label}
          placeholder="Introduce Foo"
        />
      </CheckField>
    );

    const customInput = wrapper.getByTestId("checkbox");

    fireEvent.click(customInput);

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
