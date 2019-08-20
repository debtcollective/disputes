import React from "react";
import TextField from "../TextField";
import { cleanup, fireEvent, render } from "@testing-library/react";

describe("<TextField />", () => {
  const baseProps = {
    id: "root_foo",
    label: "Foo Label",
  };

  const renderTextField = (props, onChange = jest.fn()) => {
    return render(
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
  };

  afterEach(cleanup);

  describe("when schema has format date", () => {
    it("renders <DatePicker />", () => {
      const props = {
        ...baseProps,
        schema: { format: "date", type: "string" },
      };
      const onChange = jest.fn();
      const wrapper = renderTextField(props, onChange);

      expect(wrapper.getByTestId("date-picker")).toBeTruthy();
    });

    it("supports to render a error message", () => {
      const props = {
        ...baseProps,
        rawErrors: ["is a required property"],
        schema: { format: "date", type: "string" },
      };
      const wrapper = renderTextField(props);

      expect(wrapper.getByText(/required property/i)).toBeTruthy();
    });

    it("supports to render a helper text", () => {
      const props = {
        ...baseProps,
        rawHelp: "you can set foo to whatever",
        schema: { format: "date", type: "string" },
      };
      const wrapper = renderTextField(props);

      expect(wrapper.getByText(/set foo to whatever/i)).toBeTruthy();
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
        const wrapper = renderTextField(props);

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
        const wrapper = renderTextField(props);

        const customInput = wrapper.getByTestId("number-field");

        fireEvent.change(customInput, { target: { value: introducedNumber } });

        expect(customInput.value).toEqual("+1 (202) 555-0179");
      });
    });

    describe("when format is ssn", () => {
      const props = {
        ...baseProps,
        schema: { $format: "ssn", type: schemaType },
      };

      it("renders an input that masks ssn", () => {
        const introducedNumber = 123456789;
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

        expect(customInput.value).toEqual("123-45-6789");
      });
    });
  });

  it("supports to render a error message", () => {
    const props = {
      ...baseProps,
      rawErrors: ["is a required property"],
      schema: { type: "string" },
    };
    const wrapper = renderTextField(props);

    expect(wrapper.getByText(/required property/i)).toBeTruthy();
  });

  it("supports to render a helper text", () => {
    const props = {
      ...baseProps,
      rawHelp: "you can set foo to whatever",
      schema: { type: "string" },
    };
    const wrapper = renderTextField(props);

    expect(wrapper.getByText(/set foo to whatever/i)).toBeTruthy();
  });
});
