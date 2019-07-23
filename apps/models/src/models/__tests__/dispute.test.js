import Dispute from "../dispute";

describe("Dispute", () => {
  describe("validations", () => {
    it("validates data when draft is false", async () => {
      const dispute = await Dispute.fromJson({
        toolId: "credit-report-dispute",
        toolVersion: "1",
        userId: 1,
      });

      expect(dispute.draft).toEqual(true);
    });
  });
});
