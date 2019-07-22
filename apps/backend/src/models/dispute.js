import { Model, ValidationError } from "objection";
import Tool from "./tool";
import * as Ajv from "ajv";
import _ from "lodash";

class Dispute extends Model {
  static get tableName() {
    return "disputes";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["tool_id", "tool_version"],
      properties: {
        id: { type: "integer" },
        tool_id: { type: "string", minlength: 1, maxlength: 255 },
        tool_version: { type: "string", minlength: 1, maxlength: 255 },
        user_id: { type: "integer" },
        data: { type: "object" },
        draft: { type: "boolean" },
        deleted_at: { type: "string", format: "date-time" },
        created_at: { type: "string", format: "date-time" },
        updated_at: { type: "string", format: "date-time" }
      }
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
      data: errors
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
    return Tool.findById(this.tool_id);
  }
}

export default Dispute;
