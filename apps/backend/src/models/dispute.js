import Model from "objection";

class Dispute extends Model {
  static get tableName() {
    return "disputes";
  }
}

export default Dispute;
