import * as htmlPdf from "html-pdf-chrome";

declare interface DocumentGeneratorEngine {
  process(
    data: mixed,
    pathToTemplate: string
  ): Promise<[htmlPdf.CreateResult, string]>;
}

declare interface DocumentGenerator {
  engine: DocumentGeneratorEngine;
  slug: string;
  version: "v1";
  templates: Array<string>;
  generateFiles(): Promise<Array<{ file: htmlPdf.CreateResult, fileName: string }>>;
}
