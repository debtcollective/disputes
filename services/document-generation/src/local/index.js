import fs from "file-system";
import { getBrowser } from "../setup";
import { run } from "../";

(async () => {
  fs.mkdir("./pdf/");
  const browser = await getBrowser();

  await run(browser)
    .then(result => console.log(result))
    .catch(err => console.error(err));
  await browser.close();
})();
