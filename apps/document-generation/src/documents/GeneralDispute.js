// @flow

import PDFEngine from "../engines/PDFEngine";

class GeneralDispute implements DocumentGenerator {
  engine = PDFEngine;
  generateFiles = (data: mixed) => {
    console.log("generate files", data);

    return [new File([], "fileName")];
  };
  slug = "general-dispute";
  templates = ["/general_debt_dispute_letter/0.hbs"];
  version = "v1";
}

export default new GeneralDispute();
