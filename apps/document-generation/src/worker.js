// @flow

import Dispute from "./models/Dispute";
import { findBySlug } from "./documents";
import User from "./models/User";

type Params = {
  userId: string,
  disputeId: string,
};

const run = async ({ userId, disputeId }: Params) => {
  const user = await User.findById(userId);
  const dispute = await Dispute.findById(disputeId);
  const data = { dispute, user };
  const Document = findBySlug(dispute.toolId);
  const files = Document.generateFiles(data);

  return files;
};

export default {
  run,
};
