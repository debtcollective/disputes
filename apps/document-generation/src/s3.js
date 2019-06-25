// @flow

import * as htmlPdf from "html-pdf-chrome";
import AWS from "aws-sdk";

const s3 = new AWS.S3();

const upload = ({
  file,
  fileName,
}: {
  file: htmlPdf.CreateResult,
  fileName: string,
}) => {
  const buffer = file.toBuffer();

  return s3
    .putObject({
      Body: buffer,
      Bucket: process.env.BUCKET || "sls-bucket-name",
      Key: fileName,
    })
    .promise();
};

export default {
  upload,
};
