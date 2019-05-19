import React from "react";
import TextField from "../TextField";
import { cleanup, fireEvent, render } from "react-testing-library";

describe("<TextField />", () => {
  const baseProps = {
    id: "root_foo",
    label: "Foo Label",
  };

  afterEach(cleanup);

  describe("when schema has format date", () => {
    it("renders <DatePicker />", () => {
      const props = {
        ...baseProps,
        schema: { format: "date", type: "string" },
      };
      const onChange = jest.fn();
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
    const schemaType = "number";

    describe("when format is currency", () => {
      const props = {
        ...baseProps,
        schema: { $format: "currency", type: schemaType },
      };

      it("renders an input with currency capabilities", () => {
        const introducedNumber = 5419;
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

        const customInput = wrapper.getByTestId("number-field");

        fireEvent.change(customInput, { target: { value: introducedNumber } });

        expect(customInput.value).toEqual("$5,419");
      });
    });

    describe("when format is telephone", () => {
      const props = {
        ...baseProps,
        schema: { $format: "telephone", type: schemaType },
      };

      it("renders an input with telephone capabilities", () => {
        const introducedNumber = 2025550179;
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

        const customInput = wrapper.getByTestId("number-field");

        fireEvent.change(customInput, { target: { value: introducedNumber } });

        expect(customInput.value).toEqual("+1 (202) 555-0179");
      });
    });
  });
});
