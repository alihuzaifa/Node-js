import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log(`Some is getting message  by ${req.ip}`);
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  console.log(`Some is getting message at home section by  ${req.ip}`);
  res.send("Hello World Home!");
});

app.get("/about", (req, res) => {
  console.log(`Some is getting message at about section by  ${req.ip}`);
  res.send("Hello World About!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
