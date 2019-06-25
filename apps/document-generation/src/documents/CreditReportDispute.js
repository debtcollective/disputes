// @flow

import PDFEngine from "../engines/PDFEngine";

class CreditReportDispute implements DocumentGenerator {
  engine = PDFEngine;
  generateFiles = async (data: mixed) => {
    const pathsToTemplate = this.templates.map(
      template => `../templates/${template}`
    );

    const processedFiles = await this.engine.process(data, pathsToTemplate[0]);

    return [processedFiles];
  };
  slug = "credit-report-dispute";
  templates = [`${this.slug}/0.hbs`];
  version = "v1";
}

export default new CreditReportDispute();
