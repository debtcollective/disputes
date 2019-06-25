// @flow

import Dispute from "./models/Dispute";
import Document from "./documents/Document";
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
  const DocumentHandler: Document = findBySlug(dispute.toolId);
  const files = await DocumentHandler.generateFiles(data);

  return files;
};

export default {
  run,
};
