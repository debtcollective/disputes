import React from "react";
import FieldTemplate from "../FieldTemplate";
import {
  render,
  fireEvent,
  waitForElement,
  cleanup
} from "react-testing-library";

describe("<FieldTemplate />", () => {
  const baseProps = {
    id: "root_foo",
    label: "Foo Label"
  };

  afterEach(cleanup);

  describe("when schema has type string", () => {
    const props = { ...baseProps, schema: { type: "string" } };

    it("renders a custom component in place of child input", () => {
      const wrapper = render(
        <FieldTemplate {...props}>
          <input
            className="form-control"
            id={baseProps.id}
            label={baseProps.label}
            placeholder="Introduce Foo"
            type="text"
          />
        </FieldTemplate>
      );

      const childInput = wrapper.container.querySelector(`#${baseProps.id}`);
      const customdInput = wrapper.container.querySelector(
        `#MU_${baseProps.id}`
      );

      expect(customdInput).toBeTruthy();
      expect(childInput).toBe(null);
    });

    it("uses child input prop 'onChange' when edit custom input", async () => {
      const fakeText = "Hellow";
      const onChange = jest.fn();
      const wrapper = render(
        <FieldTemplate {...props}>
          <input
            onChange={onChange}
            className="form-control"
            id={baseProps.id}
            label={baseProps.label}
            placeholder="Introduce Foo"
            type="text"
          />
        </FieldTemplate>
      );
      const inputContainers = wrapper
        .getByTestId(baseProps.id)
        .getElementsByTagName("input");
      const customInput = inputContainers.item(0);
      const childInput = inputContainers.item(1);

      fireEvent.change(customInput, {
        target: { value: fakeText }
      });
      await waitForElement(() => customInput);

      expect(customInput.value).toEqual(fakeText);
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });
});
