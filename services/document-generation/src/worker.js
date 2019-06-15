// @flow

const run = async (browser: Browser, { url }: { url: string } = {}) => {
  const page = await browser.newPage();

  await page.goto(url || "https://youtube.com");
  const result = await page.title();

  return result;
};

export default {
  run,
};
