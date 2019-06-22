import faker from "faker";
import { process } from "../creator";

describe("process", () => {
  it("returns a parsed HTML from given template and data", async () => {
    const data = { body: faker.random.word(), title: faker.random.word() };
    const html = await process(data, "./stubs/dummyTemplate.hbs");

    expect(html).toEqual(expect.stringContaining(data.body));
    expect(html).toEqual(expect.stringContaining(data.title));
  });
});
