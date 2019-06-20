declare type MessageEvent = {
  disputeId: string,
  disputeType: DisputeType,
  data: mixed,
};

declare type Context = {
  fail: mixed => mixed,
  succeed: mixed => mixed,
};
