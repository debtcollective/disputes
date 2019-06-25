import CreditReportDispute from "../CreditReportDispute";
import faker from "faker";
import fs from "fs";
import { getBrowser } from "../../setup";
import path from "path";

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

describe("generateFiles", () => {
  let browser;

  beforeAll(() => {
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
    const files = await CreditReportDispute.generateFiles(fullData);
    const readFiles = fs.readdirSync(pathToPDFfolder);

    expect(readFiles).toEqual(files);
  });
});
