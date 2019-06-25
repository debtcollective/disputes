// @flow

class DummyEngine implements DocumentGeneratorEngine {
  process = async (data: mixed, pathToTemplate: string) => {
    console.warn("calling process without proper engine", data, pathToTemplate);

    return Promise.resolve("");
  };
}

export default class Document implements DocumentGenerator {
  version = "v1";
  slug = "";
  engine = new DummyEngine();
  templates = [];
  generateFiles = async (data: mixed) => {
    const pathsToTemplate = this.templates.map(
      template => `../templates/${template}`
    );

    const processedFiles = await Promise.all(
      pathsToTemplate.map(async t => {
        return await this.engine.process(data, t);
      })
    );

    return processedFiles;
  };
}
