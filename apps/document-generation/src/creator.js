import fs from "fs";
import handlebars from "handlebars";
import path from "path";

export const process = async (data, templatePath) => {
  const source = await fs.promises.readFile(path.join(__dirname, templatePath));
  var template = handlebars.compile(source.toString());
  var outputString = template(data);

  return outputString;
};
