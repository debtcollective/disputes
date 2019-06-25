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
  const bucketName = process.env.BUCKET || "";
  const params = {
    Body: buffer,
    Bucket: bucketName,
    Key: fileName,
  };

  return new Promise((resolve, reject) => {
    const expectedUrl = `https://${bucketName}.s3.amazonaws.com/${fileName}`;
    s3.putObject(params, err => {
      if (err) {
        reject(err);
      }
      resolve(expectedUrl);
    });
  });
};

export default {
  upload,
};
