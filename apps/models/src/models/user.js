import { Model } from "objection";

class User extends Model {
  static get tableName() {
    return "users";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["external_id", "username"],
      properties: {
        id: { type: "integer" },
        avatar_url: { type: "string", format: "uri" },
        deleted_at: { type: "string", format: "date" },
        draft: { type: "boolean" },
        email: { type: "string", format: "email" },
        external_id: { type: "integer" },
        name: { type: "string", minlength: 1, maxlength: 255 },
        username: { type: "string" }
      }
    };
  }
}

export default User;
