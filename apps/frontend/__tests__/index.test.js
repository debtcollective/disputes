/* eslint-env jest */

import App from "../pages/index.js";
import React from "react";
import { render } from "react-testing-library";
import wait from "waait";

describe("With React Testing Library", () => {
  it("Shows \"Hello world!\"", () => {
    const { getByText } = render(<App />);

    expect(getByText("General Dispute")).not.toBeNull();
  });
});

describe("With React Testing Library Snapshot", () => {
  it("Should match Snapshot", async () => {
    const { asFragment } = render(<App />);

    // wait for next tick to test final state
    // https://www.apollographql.com/docs/react/recipes/testing.html#Testing-final-state
    await wait(0);

    expect(asFragment()).toMatchSnapshot();
  });
});
