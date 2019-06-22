// @flow

class Dispute implements DataModel {
  findById = async (id: string) => ({
    id,
    toolId: "credit-report-dispute",
  });
}

export default new Dispute();
