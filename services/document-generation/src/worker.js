const run = async (browser, { url }) => {
  const page = await browser.newPage();

  await page.goto(url || "https://youtube.com");
  const result = await page.title();

  return result;
};

export default {
  run,
};
