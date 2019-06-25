// @flow

import { getBrowser } from "./setup";
import worker from "./worker";

export const handler = async (event: MessageEvent, context: Context) => {
  let result = null;
  let browser = null;

  try {
    browser = await getBrowser();
    result = await worker.run(event);
  } catch (error) {
    return context.fail(error);
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }

  return context.succeed({
    body: JSON.stringify({
      result,
    }),
    headers: { "Content-Type": "application/json" },
    statusCode: 200,
  });
};
