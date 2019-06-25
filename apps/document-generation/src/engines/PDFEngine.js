// @flow

import * as htmlPdf from "html-pdf-chrome";
import fs from "fs";
import handlebars from "handlebars";
import path from "path";
import uuid from "uuid";

class PDFEngine implements DocumentGeneratorEngine {
  process = async (data: mixed, pathToTemplate: string) => {
    const html = await this.interpolateTemplate(data, pathToTemplate);
    const [pdf, fileName] = await this.createFile(html);

    return [pdf, fileName];
  };

  interpolateTemplate = async (data: mixed, pathToTemplate: string) => {
    const templateFile = await fs.promises.readFile(
      path.join(__dirname, pathToTemplate)
    );
    const template = handlebars.compile(templateFile.toString());
    const html = template(data);

    return html;
  };

  createFile = async (html: string) => {
    const fileName = `${uuid.v4()}.pdf`;
    const pdf = await htmlPdf.create(html, { port: 9222 });

    return [pdf, fileName];
  };
}

export default new PDFEngine();
