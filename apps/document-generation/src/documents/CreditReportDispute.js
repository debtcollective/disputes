// @flow

import PDFEngine from "../engines/PDFEngine";

class CreditReportDispute implements DocumentGenerator {
  engine = PDFEngine;
  generateFiles = (data: mixed) => {
    console.log("generate files", data);

    return [new File([], "fileName")];
  };
  slug = "credit-report-dispute";
  templates = ["/general_debt_dispute_letter/0.hbs"];
  version = "v1";
}

export default new CreditReportDispute();
