import Ajv from "ajv";
import _ from "lodash";
import Model from "./model";

class Dispute extends Model {
  static get tableName() {
    return "disputes";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["toolId", "toolVersion"],
      properties: {
        createdAt: { type: "string", format: "date-time" },
        data: { type: "object" },
        deletedAt: { type: "string", format: "date-time" },
        draft: { type: "boolean", default: true },
        id: { type: "integer" },
        toolId: { type: "string", minlength: 1, maxlength: 255 },
        toolVersion: { type: "string", minlength: 1, maxlength: 255 },
        updated_at: { type: "string", format: "date-time" },
        userId: { type: "integer" },
      },
    };
  }

  $beforeInsert(queryContext) {
    super.$beforeInsert(queryContext);

    // don't run validations when is in draft mode
    if (this.draft) {
      return true;
    }

    const errors = this._validateToolData();

    if (_.isEmpty(errors)) {
      return true;
    }

    throw new ValidationError({
      type: "InvalidToolDataError",
      message: "Some parts of your input are invalid",
      data: errors,
    });
  }

  /**
   * Validate `data` property against Tool schema
   */
  async _validateToolData() {
    const tool = await this.tool();
    const schema = tool.schema;

    // validate data using schema
    const ajv = new Ajv({});
    ajv.validate(schema, this.data);

    return ajv.errors;
  }

  tool() {
    return { schema: {} };
  }
}

export default Dispute;
