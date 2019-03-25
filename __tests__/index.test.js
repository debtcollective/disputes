/* eslint-env jest */

import React from "react";
import { render } from "react-testing-library";
import App, { ALL_POSTS_QUERY } from "../pages/index.js";
import { MockedProvider } from "react-apollo/test-utils";
import wait from "waait";

const mocks = [
  {
    request: {
      query: ALL_POSTS_QUERY,
      variables: {
        skip: 0,
        first: 10
      }
    },
    result: {
      data: {
        allPosts: [
          { id: "1", title: "title 1", url: "posturl1" },
          { id: "2", title: "title 2", url: "posturl2" }
        ]
      }
    }
  }
];

describe("With React Testing Library", () => {
  it('Shows "Hello world!"', () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    expect(getByText("Hello World!")).not.toBeNull();
  });
});

describe("With React Testing Library Snapshot", () => {
  it("Should match Snapshot", async () => {
    const { asFragment } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    // wait for next tick to test final state
    // https://www.apollographql.com/docs/react/recipes/testing.html#Testing-final-state
    await wait(0);

    expect(asFragment()).toMatchSnapshot();
  });
});
