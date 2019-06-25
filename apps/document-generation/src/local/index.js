// @flow

import fs from "fs";
import { getBrowser } from "../setup";
import worker from "../worker";

(async () => {
  fs.mkdir("./pdf/", async () => {
    const browser = await getBrowser();
    const event = { disputeId: "987", userId: "123" };

    await worker
      .run(event)
      .then(result => console.log(result))
      .catch(err => console.error(err));
    await browser.close();
  });
})();
