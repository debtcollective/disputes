// @flow

import * as htmlPdf from "html-pdf-chrome";
import AWS from "aws-sdk";

const s3 = new AWS.S3();

const upload = async ({
  file,
  fileName,
}: {
  file: htmlPdf.CreateResult,
  fileName: string,
}) => {
  const buffer = file.toBuffer();
  const params = {
    Body: buffer,
    Bucket: process.env.BUCKET,
    Key: fileName,
  };

  return new Promise((resolve, reject) => {
    s3.getSignedUrl("putObject", params, (err, url) => {
      if (err) {
        reject(err);
      }
      resolve(url);
    });
  });
};

export default {
  upload,
};
