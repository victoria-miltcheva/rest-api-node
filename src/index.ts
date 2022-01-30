import express from "express";
import config from "config";

const app = express();
const port = config.get("port");

app.post("/records", (req, res) => {
  res.send("test");
});

app.listen(port, () => {
  console.log("App listening on port", port);
});
