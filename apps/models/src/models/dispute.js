import * as Ajv from "ajv";
import _ from "lodash";
import { Model, ValidationError } from "objection";

class Dispute extends Model {
  static get tableName() {
    return "disputes";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["tool_id", "tool_version"],
      properties: {
        created_at: { type: "string", format: "date-time" },
        data: { type: "object" },
        deleted_at: { type: "string", format: "date-time" },
        draft: { type: "boolean" },
        id: { type: "integer" },
        tool_id: { type: "string", minlength: 1, maxlength: 255 },
        tool_version: { type: "string", minlength: 1, maxlength: 255 },
        updated_at: { type: "string", format: "date-time" },
        user_id: { type: "integer" },
      },
    };
  }

  $beforeInsert() {
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
    return {};
  }
}

export default Dispute;
