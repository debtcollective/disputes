import { Dispute } from "@debtcollective/models";
import knex from "../knex";

describe("Dispute", () => {
  beforeAll(() => {
    Dispute.knex(knex);
  });

  afterAll(() => {
    knex.destroy();
  });

  it("creates a new record", async () => {
    const dispute = await Dispute.query().insert({
      toolId: "1",
      toolVersion: "v1",
    });

    expect(dispute.toolId).toEqual("1");
    expect(dispute.draft).toEqual(true);
    expect(dispute.createdAt).toBeDefined();
    expect(dispute.updatedAt).toBeDefined();
  });
});
