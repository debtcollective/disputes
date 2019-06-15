// @flow

import chromium from "chrome-aws-lambda";

export const getBrowser = async () => {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args.concat(["--remote-debugging-port=9222"]),
    defaultViewport: chromium.defaultViewport,
    executablePath:
      (await chromium.executablePath) ||
      process.env.CHROME_PATH ||
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true,
  });

  return browser;
};
