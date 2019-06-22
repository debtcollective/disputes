declare interface DocumentGeneratorEngine {
  process(data: mixed, pathToTemplate: string): Promise<File>;
  interpolateTemplate(data: mixed, pathToTemplate: string): Promise<string>;
  createFile(htmlString: string): Promise<File>;
}

declare interface DocumentGenerator {
  engine: DocumentGeneratorEngine;
  slug: string;
  version: "v1";
  templates: Array<string>;
  generateFiles(): Array<File>;
}
