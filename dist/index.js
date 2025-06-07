import "reflect-metadata";
import express from "express";
import router from "./router";
import testRouter from "./router/v1/test";
const app = express();
const PORT = process.env.PORT || 3000;
const APP_PREFIX = "/api/v1";
// const AppDataSource = new DataSource({
//   type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "your_username",
//   password: "your_password",
//   database: "your_database",
//   synchronize: false,
//   logging: false,
//   entities: ["src/entity/**/*.ts"],
//   migrations: ["src/migration/**/*.ts"],
//   subscribers: ["src/subscriber/**/*.ts"],
// });
// AppDataSource.initialize()
//   .then(async () => {
//     app.use("/api/v1", router);
//     app.use(`${APP_PREFIX}/test`, testRouter);
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch((error) => console.log("Data Source initialization error: ", error));
app.use("/api/v1", router);
app.use(`${APP_PREFIX}/test`, testRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map