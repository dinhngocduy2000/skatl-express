import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

const POSTGRES_PORT = Number(process.env.POSTGRES_PORT) || 5432;
const POSTGRES_HOST = process.env.POSTGRES_HOST || "localhost";
const POSTGRES_USER = process.env.POSTGRES_USER || "postgres";
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || "postgres";
const POSTGRES_DATABASE = process.env.POSTGRES_DB || "postgres";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE,
  synchronize: false,
  logging: true,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
});
