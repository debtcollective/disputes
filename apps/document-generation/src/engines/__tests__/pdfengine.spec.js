import faker from "faker";
import PDFEngine from "../PDFEngine";

describe("interpolateTemplate", () => {
  it("returns a parsed HTML from given template and data", async () => {
    const data = { body: faker.random.word(), title: faker.random.word() };
    const html = await PDFEngine.interpolateTemplate(
      data,
      "../stubs/dummyTemplate.hbs"
    );

    expect(html).toEqual(expect.stringContaining(data.body));
    expect(html).toEqual(expect.stringContaining(data.title));
  });
});
