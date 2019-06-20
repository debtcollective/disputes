// @flow

import { getAllTemplates } from "./templates";
import { persistDisputeDocuments } from "./db";
import { process } from "./creator";
import { upload } from "./s3";

type Params = {
  disputeId: string,
  disputeType: DisputeType,
  data: mixed,
};

const run = ({ disputeId, disputeType, data }: Params) => {
  const templates = getAllTemplates(disputeType);
  const documents = templates.map(template => process(template, data));
  const links = documents.map(upload);

  return persistDisputeDocuments(disputeId, links);
};

export default {
  run,
};
