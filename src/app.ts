import "reflect-metadata";
import express from "express";
import router from "./router";
import dotenv from "dotenv";
import testRouter from "./router/v1/test";
import cors from "cors";
import { AppDataSource } from "./data-source";
dotenv.config();
const app = express();
const PORT = process.env.APP_PORT || 3000;
// Load environment variables from .env file
const APP_PREFIX = "/api/v1";
app.use(
  cors({
    origin: "*",
  })
);

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
