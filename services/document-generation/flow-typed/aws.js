declare type MessageEvent = {
  url: string,
};

declare type Context = {
  fail: mixed => mixed,
  succeed: mixed => mixed,
};
