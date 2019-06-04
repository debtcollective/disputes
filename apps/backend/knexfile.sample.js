const env = process.env.NODE_ENV || "development";

module.exports = {
  client: "postgresql",
  connection: process.env.DB_CONNECTION_STRING || {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "orlando",
    database: process.env.DB_SCHEMA || `disputes_${env}`
  },
  pool: {
    min: process.env.DB_POOL_MIN || 1,
    max: process.env.DB_POOL_MAX || 1
  }
};
