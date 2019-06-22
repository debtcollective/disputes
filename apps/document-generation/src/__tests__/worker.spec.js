import faker from "faker";
import { getAllTemplates } from "../templates";
import { persistDisputeDocuments } from "../db";
import { process } from "../creator";
import { upload } from "../s3";
import worker from "../worker";

jest.mock("../templates");
jest.mock("../creator");
jest.mock("../s3");
jest.mock("../db");

describe("worker#run", () => {
  const event = {
    data: {
      email: faker.internet.email(),
      name: faker.name.findName(),
    },
    disputeId: faker.random.uuid(),
    disputeType: "general-debt-dispute",
  };

  beforeAll(() => {
    getAllTemplates.mockReturnValue(["hello #{{name}}", "email to #{{email}}"]);
    process.mockReturnValueOnce(`hello ${event.name}`);
    process.mockReturnValueOnce(`email to ${event.email}`);
    upload.mockReturnValueOnce("path/to/one");
    upload.mockReturnValueOnce("path/to/two");
  });

  xit("orchestrates the whole workflow", () => {
    worker.run(event);

    expect(getAllTemplates).toHaveBeenCalledTimes(1);
    expect(getAllTemplates).toHaveBeenCalledWith(event.disputeId);
    expect(process).toHaveBeenCalledTimes(2);
    expect(process).toHaveBeenLastCalledWith("hello #{{name}}", event.data);
    expect(upload).toHaveBeenCalledTimes(2);
    expect(upload).toHaveBeenLastCalledWith(`email to ${event.email}`);
    expect(persistDisputeDocuments).toHaveBeenCalledWith([
      "path/to/one",
      "path/to/two",
    ]);
  });
});
