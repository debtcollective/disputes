declare type MessageEvent = {
  disputeId: string,
  userId: string,
};

declare type Context = {
  fail: mixed => mixed,
  succeed: mixed => mixed,
};
