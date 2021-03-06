/* eslint-env jest */

import Page from "../index";
import React from "react";
import { render } from "@testing-library/react";
import wait from "waait";

describe("index page", () => {
  describe("render", () => {
    it("renders form list", () => {
      const { getByText } = render(<Page />);

      expect(getByText("General Dispute")).not.toBeNull();
    });
  });

  describe("snapshot", () => {
    it("should match snapshot", async () => {
      const { asFragment } = render(<Page />);

      // wait for next tick to test final state
      // https://www.apollographql.com/docs/react/recipes/testing.html#Testing-final-state
      await wait(0);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
