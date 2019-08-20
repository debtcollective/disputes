module.exports = {
  displayName: "Frontend",
  name: "@debtcollective/disputes-frontend",
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/cypress",
  ],
  transformIgnorePatterns: ["/node_modules/(?!@debtcollective/header).+\\.js$"],
};
