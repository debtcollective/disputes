import Dispute from "$models/dispute";
import { setupDatabase, cleanDatabase } from "$utils";

describe("Dispute", () => {
  beforeAll(() => setupDatabase());
  afterEach(() => cleanDatabase());

  describe("validations", () => {
    it("validates base fields", () => {
      const dispute = new Dispute({});
    });

    it("validates data field when draft is true", async () => {
      const props = {
        tool_id: "credit-report-dispute",
        tool_version: "1",
        user_id: 1,
        draft: true
      };

      const dispute = await Dispute.fromJson(props)
        .$query()
        .insert();

      expect(dispute).toBeDefined();
      expect(dispute.data).toEqual({});
    });
  });
});
