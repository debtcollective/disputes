// @flow

import Document from "./Document";
import PDFEngine from "../engines/PDFEngine";

class GeneralDispute extends Document implements DocumentGenerator {
  engine = PDFEngine;
  slug = "general-dispute";
  templates = [`${this.slug}/0.hbs`];
  version = "v1";
}

export default new GeneralDispute();
