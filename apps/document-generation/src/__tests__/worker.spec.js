import CreditReportDispute from "../documents/CreditReportDispute";
import Dispute from "../models/Dispute";
import faker from "faker";
import GeneralDispute from "../documents/GeneralDispute";
import s3 from "../s3";
import User from "../models/User";
import worker from "../worker";

jest.mock("../documents/GeneralDispute");
jest.mock("../documents/CreditReportDispute");
jest.mock("../models/User");
jest.mock("../models/Dispute");
jest.mock("../s3");

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

const event = {
  disputeId: fakeData.disputeId,
  userId: fakeData.userId,
};

const processedFiles = [
  { file: { toFile: jest.fn() }, fileName: "foo.pdf" },
  { file: { toFile: jest.fn() }, fileName: "bar.pdf" },
];

beforeAll(() => {
  User.findById.mockReturnValue(fullData.user);
  Dispute.findById.mockReturnValue(fullData.dispute);
  GeneralDispute.generateFiles.mockResolvedValue(processedFiles);
  CreditReportDispute.generateFiles.mockResolvedValue(processedFiles);
});

afterEach(() => {
  jest.clearAllMocks();
});

test("triggers a files generation method with user and dispute data", async () => {
  await worker.run(event);

  expect(CreditReportDispute.generateFiles).toHaveBeenCalledTimes(1);
  expect(CreditReportDispute.generateFiles).toHaveBeenCalledWith(fullData);
});

test("triggers s3 upload method with processed files", async () => {
  await worker.run(event);

  expect(s3.upload).toHaveBeenCalledTimes(processedFiles.length);
  expect(s3.upload).lastCalledWith(processedFiles[processedFiles.length - 1]);
});

describe("when message belongs to credit report dispute", () => {
  it("runs the CreditReportDispute files generation method", async () => {
    await worker.run(event);

    expect(CreditReportDispute.generateFiles).toHaveBeenCalledTimes(1);
    expect(CreditReportDispute.generateFiles).toHaveBeenCalledWith(fullData);
  });
});

describe("when message belongs to a general dispute debt", () => {
  it("runs the GeneralDispute files generation method", async () => {
    Dispute.findById.mockReturnValue({
      ...fullData.dispute,
      toolId: "general-dispute",
    });

    await worker.run(event);

    expect(GeneralDispute.generateFiles).toHaveBeenCalledTimes(1);
    expect(GeneralDispute.generateFiles).toHaveBeenCalledWith({
      ...fullData,
      dispute: {
        ...fullData.dispute,
        toolId: "general-dispute",
      },
    });
  });
});
