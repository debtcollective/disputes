// @flow

class Dispute {
  static findById = async (id: string) => ({
    id,
    toolId: "credit-report-dispute",
  });
}

export default Dispute;
