/* eslint-env jest */

import Page from "../pages/index";
import React from "react";
import { render } from "react-testing-library";
import wait from "waait";

describe("index page", () => {
  describe("Snapshot", () => {
    it("Should match Snapshot", async () => {
      const { asFragment } = render(<Page />);

      // wait for next tick to test final state
      // https://www.apollographql.com/docs/react/recipes/testing.html#Testing-final-state
      await wait(0);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
