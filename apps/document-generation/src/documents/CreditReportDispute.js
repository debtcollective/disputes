// @flow

import Document from "./Document";
import PDFEngine from "../engines/PDFEngine";

class CreditReportDispute extends Document implements DocumentGenerator {
  engine = PDFEngine;
  slug = "credit-report-dispute";
  templates = [`${this.slug}/0.hbs`];
  version = "v1";
}

export default new CreditReportDispute();
