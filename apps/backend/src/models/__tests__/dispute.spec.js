import Dispute from "$models/dispute";
import User from "$models/user";
import { setupDatabase, cleanDatabase } from "$utils";

describe("Dispute", () => {
  beforeAll(() => {
    setupDatabase();
    return cleanDatabase();
  });

  afterEach(() => cleanDatabase());

  describe("validations", () => {
    xit("validates data field when draft is true", async () => {
      const user = await User.fromJson({
        external_id: 1,
        username: "orlando",
      })
        .$query()
        .insert();

      const dispute = await Dispute.fromJson({
        tool_id: "credit-report-dispute",
        tool_version: "1",
        user_id: user.id,
        draft: true,
      })
        .$query()
        .insert();

      expect(dispute).toBeDefined();
      expect(dispute.data).toEqual({});
    });
  });
});
