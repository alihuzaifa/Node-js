import express from "express";
import path from "path";
// import { __dirname } from "path";
const app = express();
const port = process.env.PORT || 5000;

app.get("/home", (req, res) => {
  console.log(`Some is getting message at home section by  ${req.ip}`);
  res.send("Hello World Home!");
});

app.get("/about", (req, res) => {
  console.log(`Some is getting message at about section by  ${req.ip}`);
  res.send("Hello World About!");
});

const __dirname = path.resolve();
app.use("/", express.static(path.join(__dirname, "./practicing/build")));
app.use("*", express.static(path.join(__dirname, "./practicing/build")));

app.get("/", (req, res) => {
  console.log(`Some is getting message  by ${req.ip}`);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
