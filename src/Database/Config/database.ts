import "dotenv/config";
import { Options } from "sequelize";

const config: Options = {
  username: process.env.PGUSER || "postgres",
  password: process.env.PGPASSWORD || "postgres",
  database: process.env.PGDATABASE || "shopper_backend",
  host: process.env.PGHOST || "localhost",
  port: Number(process.env.PGPORT) || 5432,
  dialect: "postgres",
  dialectOptions: {
    timezone: "Z",
  },
  logging: false,
};

module.exports = config;
