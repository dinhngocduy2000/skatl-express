import "reflect-metadata";
import { DataSource } from "typeorm";
import express from "express";
import router from "./router";
import testRouter from "./router/v1/test";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;
const APP_PREFIX = "/api/v1";
app.use(
  cors({
    origin: "*",
  })
);
const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "your_username",
  password: "your_password",
  database: "your_database",
  synchronize: false,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
});

AppDataSource.initialize()
  .then(async () => {
    app.use((req, res, next) => {
      console.log("Time:", Date.now());
      next();
    });
    app.use("/api/v1", router);
    app.use(`${APP_PREFIX}/test`, testRouter);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log("Data Source initialization error: ", error));
