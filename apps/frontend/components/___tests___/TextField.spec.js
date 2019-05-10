import React from "react";
import TextField from "../TextField";
import { render, cleanup, fireEvent } from "react-testing-library";

describe("<TextField />", () => {
  const baseProps = {
    id: "root_foo"
  };

  afterEach(cleanup);

  describe("when schema has format date", () => {
    it("renders <DatePicker />", () => {
      const props = {
        ...baseProps,
        schema: { type: "string", format: "date" }
      };
      const onChange = jest.fn();
      const customId = `#MU_${baseProps.id}`;
      const wrapper = render(
        <TextField {...props}>
          <input
            onChange={onChange}
            className="form-control"
            id={baseProps.id}
            placeholder="Introduce date foo"
            type="text"
          />
        </TextField>
      );

      expect(wrapper.getByTestId("date-picker")).toBeTruthy();
    });
  });

  describe("when schema has type number", () => {
    const inputType = { number: "number" };
    const schemaType = "number";
    const props = { ...baseProps, schema: { type: schemaType } };

    it("renders an input with currency capabilities", () => {
      const introducedNumber = 12345;
      const wrapper = render(
        <TextField {...props}>
          <input
            onChange={jest.fn()}
            className="form-control"
            id={baseProps.id}
            label={baseProps.label}
            placeholder="Introduce Foo"
          />
        </TextField>
      );

      const customInput = wrapper.container.querySelector(
        `#MU_${baseProps.id}`
      );

      fireEvent.change(customInput, { target: { value: introducedNumber } });

      expect(customInput.value).toEqual("$12,345");
    });
  });
});
