import FieldTemplate from "../FieldTemplate";
import React from "react";
import {
  cleanup,
  fireEvent,
  render,
  waitForElement,
} from "@testing-library/react";

describe("<FieldTemplate />", () => {
  const baseProps = {
    id: "root_foo",
    label: "Foo Label",
  };

  afterEach(cleanup);

  describe("when schema has type string or number", () => {
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
      const customInput = wrapper.container.querySelector(
        `#MU_${baseProps.id}`
      );

      expect(customInput).toBeTruthy();
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

      fireEvent.change(customInput, {
        target: { value: fakeText },
      });
      await waitForElement(() => customInput);

      expect(customInput.value).toEqual(fakeText);
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe("when schema has type string", () => {
    const inputType = { string: "text" };
    const schemaType = "string";
    const props = { ...baseProps, schema: { type: schemaType } };

    it("renders a custom input component with type 'text'", () => {
      const wrapper = render(
        <FieldTemplate {...props}>
          <input
            className="form-control"
            id={baseProps.id}
            label={baseProps.label}
            placeholder="Introduce Foo"
          />
        </FieldTemplate>
      );

      const customInput = wrapper.container.querySelector(
        `#MU_${baseProps.id}`
      );

      expect(customInput.type).toEqual(inputType[props.schema.type]);
    });
  });

  describe("when schema has type number", () => {
    const schemaType = "number";
    const props = { ...baseProps, schema: { type: schemaType } };

    it("renders a custom input component <NumberField />", () => {
      const wrapper = render(
        <FieldTemplate {...props}>
          <input
            className="form-control"
            id={baseProps.id}
            label={baseProps.label}
            placeholder="Introduce Foo"
          />
        </FieldTemplate>
      );

      expect(wrapper.getByTestId("number-field")).toBeTruthy();
    });
  });

  describe("when schema has format date", () => {
    const props = { ...baseProps, schema: { format: "date", type: "string" } };

    it("renders a custom input component <DatePicker />", () => {
      const wrapper = render(
        <FieldTemplate {...props}>
          <input
            className="form-control"
            id={baseProps.id}
            label={baseProps.label}
            placeholder="Introduce Foo"
          />
        </FieldTemplate>
      );

      expect(wrapper.getByTestId("date-picker")).toBeTruthy();
    });
  });

  describe("when schema has 'enum' property", () => {
    const props = { ...baseProps, schema: { enum: ["foo", "bar"] } };

    it("renders a <SelectField />", () => {
      const wrapper = render(
        <FieldTemplate {...props}>
          <input
            className="form-control"
            id={baseProps.id}
            label={baseProps.label}
            placeholder="Introduce Foo"
          />
        </FieldTemplate>
      );

      expect(wrapper.getByTestId("select-field")).toBeTruthy();
    });
  });

  describe("when schema doesn't match any criteria", () => {
    const props = { ...baseProps, schema: {} };

    it("renders a <PlainTemplate />", () => {
      const wrapper = render(
        <FieldTemplate {...props}>
          <input
            className="form-control"
            id={baseProps.id}
            label={baseProps.label}
            placeholder="Introduce Foo"
          />
        </FieldTemplate>
      );

      expect(wrapper.getByTestId("plain-template")).toBeTruthy();
    });
  });

  describe("when uiSchema has a ui:widget definition", () => {
    it("renders a custom radio button when ui:widget is \"radio\"", () => {
      const props = {
        ...baseProps,
        schema: { enum: ["Foo", "Bar"], type: "string" },
        uiSchema: { "ui:widget": "radio" },
      };

      const wrapper = render(
        <FieldTemplate {...props}>
          <input
            className="form-control"
            id={baseProps.id}
            label={baseProps.label}
            placeholder="Introduce Foo"
          />
        </FieldTemplate>
      );

      expect(wrapper.getByTestId("radio")).toBeTruthy();
    });

    it("renders a custom checkbox when ui:widget is \"checkboxes\"", () => {
      const props = {
        ...baseProps,
        schema: { items: { enum: ["Foo", "Bar"] }, type: "string" },
        uiSchema: { "ui:widget": "checkboxes" },
      };
      const wrapper = render(
        <FieldTemplate {...props}>
          <input
            className="form-control"
            id={baseProps.id}
            label={baseProps.label}
            placeholder="Introduce Foo"
          />
        </FieldTemplate>
      );

      expect(wrapper.getByTestId("checkbox")).toBeTruthy();
    });

    it("renders a <PlainTemplate />", () => {
      const props = {
        ...baseProps,
        schema: { type: "string" },
        uiSchema: { "ui:widget": "foo" },
      };

      const wrapper = render(
        <FieldTemplate {...props}>
          <input
            className="form-control"
            id={baseProps.id}
            label={baseProps.label}
            placeholder="Introduce Foo"
          />
        </FieldTemplate>
      );

      expect(wrapper.getByTestId("plain-template")).toBeTruthy();
    });
  });

  describe("when format is 'data-url'", () => {
    it("renders a <PlainTemplate />", () => {
      const props = {
        ...baseProps,
        schema: { format: "data-url", type: "string" },
      };

      const wrapper = render(
        <FieldTemplate {...props}>
          <input
            className="form-control"
            id={baseProps.id}
            label={baseProps.label}
            placeholder="Introduce Foo"
          />
        </FieldTemplate>
      );

      expect(wrapper.getByTestId("plain-template")).toBeTruthy();
    });
  });
});
