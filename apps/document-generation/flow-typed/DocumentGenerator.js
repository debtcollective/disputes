declare interface DocumentGeneratorEngine {
  process(data: mixed, pathToTemplate: string): Promise<string>;
}

declare interface DocumentGenerator {
  engine: DocumentGeneratorEngine;
  slug: string;
  version: "v1";
  templates: Array<string>;
  generateFiles(): Promise<Array<string>>;
}
