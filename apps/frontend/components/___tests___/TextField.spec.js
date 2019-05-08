import React from "react";
import TextField from "../TextField";
import { render, cleanup } from "react-testing-library";

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
});
