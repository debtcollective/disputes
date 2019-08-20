/* eslint-env jest */

import Page from "../index";
import React from "react";
import { render } from "@testing-library/react";
import wait from "waait";

describe("index page", () => {
  describe("Snapshot", () => {
    it("Should match Snapshot", () => {
      const { asFragment } = render(<Page />);

      // wait for next tick to test final state
      // https://www.apollographql.com/docs/react/recipes/testing.html#Testing-final-state
      wait(0);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
