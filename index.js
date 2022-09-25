import express from "express";
import cors from "cors";

import user from "./routes/users.routes.js";
import gpsdata from "./routes/gpsdata.routes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.use("/users", user);
app.use("/devices", gpsdata);

app.listen(8080, () => {
  console.log("server is running on port 8080");
});
