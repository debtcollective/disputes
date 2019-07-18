import Dispute from "../dispute";

describe("Dispute", () => {
  describe("validations", () => {
    it("validates data field when draft is true", async () => {
      const dispute = await Dispute.fromJson({
        draft: true,
        tool_id: "credit-report-dispute",
        tool_version: "1",
        user_id: 1,
      });

      expect(dispute).toBeDefined();
    });
  });
});
