// @flow

import fs from "file-system";
import { getBrowser } from "../setup";
import worker from "../worker";

(async () => {
  fs.mkdir("./pdf/");
  const browser = await getBrowser();

  await worker
    .run(browser)
    .then(result => console.log(result))
    .catch(err => console.error(err));
  await browser.close();
})();
