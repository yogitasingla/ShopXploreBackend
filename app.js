import express from "express";
const app = express();
import cors from "cors";
import { join } from "path";
import middleware from "./src/middleware/index.js";
import healthCheckRoutes from "./src/routes/healthCheckRoutes.js";
import routes from "./src/routes/index.js";
import response from "./src/middleware/response.js";
app.use(response);

app.use(
  cors({
    methods: ["GET", "POST"],
    optionsSuccessStatus: 204,
  })
);

middleware.forEach((md) => {
  app.use(md);
});

app.use("/healthcheck", healthCheckRoutes);

// attach the routes to the app
routes(app);

// 404 route not found
app.use(function (req, res, next) {
  return res.notFound(req.url + " Not found.");
});

// 500 - Any server error
app.use(function (err, req, res, next) {
  return res.serverError(err);
});

export default app;
