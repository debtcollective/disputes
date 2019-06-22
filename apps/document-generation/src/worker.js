// @flow

import CreditReportDispute from "./documents/CreditReportDispute";
import Dispute from "./models/Dispute";
import User from "./models/User";

type Params = {
  userId: string,
  disputeId: string,
};

const run = async ({ userId, disputeId }: Params) => {
  const user = await User.findById(userId);
  const dispute = await Dispute.findById(disputeId);
  const data = { dispute, user };

  const files = CreditReportDispute.generateFiles(data);

  return files;
};

export default {
  run,
};
