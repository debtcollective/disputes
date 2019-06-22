// @flow

const documentMap = {
  "credit-report-dispute": require("./CreditReportDispute").default,
  "general-dispute": require("./GeneralDispute").default,
};

export const findBySlug = (documentSlug: $Keys<typeof documentMap>) => {
  return documentMap[documentSlug];
};
