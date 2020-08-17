const express = require("express");
const app = express();

const PORT = 3000;
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.set("port", PORT);
app.listen(app.get("port"), () => {
  console.log(`✅ app is listening in PORT ${app.get("port")}`);
});
