// @flow

import PDFEngine from "../engines/PDFEngine";

class CreditReportDispute implements DocumentGenerator {
  engine = PDFEngine;
}

export default new CreditReportDispute();
