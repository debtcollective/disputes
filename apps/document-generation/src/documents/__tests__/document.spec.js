import Document from "../Document";
import faker from "faker";
import fs from "fs";
import { getBrowser } from "../../setup";
import path from "path";
import PDFEngine from "../../engines/PDFEngine";

const fakeData = {
  disputeId: faker.random.uuid(),
  userId: faker.random.uuid(),
};

const fullData = {
  dispute: {
    date: faker.date.recent(1),
    id: fakeData.disputeId,
    toolId: "credit-report-dispute",
  },
  user: {
    id: fakeData.userId,
    name: faker.name.findName(),
  },
};

const pathToPDFfolder = path.join(__dirname, "../../../pdf");
const templates = ["credit-report-dispute/0.hbs", "general-dispute/0.hbs"];
const DocumentHandler = (() => {
  class TestDocument extends Document {
    engine = PDFEngine;
    templates = templates;
  }

  return new TestDocument();
})();

// NOTE: CI is not able to run this since it relies on Chromium instance
describe.skip("generateFiles", () => {
  let browser;

  beforeAll(() => {
    // A place to store the created PDFs while development
    const dir = pathToPDFfolder;

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    browser = getBrowser();
  });

  beforeEach(() => {
    fs.readdirSync(pathToPDFfolder).forEach(f =>
      fs.unlinkSync(path.join(pathToPDFfolder, f))
    );
  });

  afterAll(async () => {
    await browser.close();
  });

  it("creates a file for each template on the document", async () => {
    const files = await DocumentHandler.generateFiles(fullData, templates);

    // simulate side effect after process files
    await Promise.all(
      files.map(async ({ fileName, file }) => {
        const pathToFile = `pdf/${fileName}`;
        await file.toFile(pathToFile);
      })
    );
    const readFiles = fs.readdirSync(pathToPDFfolder);

    expect(files.length).toEqual(templates.length);
    expect(files.filter(f => f.fileName === readFiles[0])).toHaveLength(1);
    expect(files.filter(f => f.fileName === readFiles[1])).toHaveLength(1);
  });
});
