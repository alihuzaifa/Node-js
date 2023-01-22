import express from "express";
import path from "path";
import cors from "cors";
const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

app.get("/home", (req, res) => {
  console.log(`Some is getting message at home section by  ${req.ip}`);
  res.send("Hello World Home!");
});

app.get("/about", (req, res) => {
  console.log(`Some is getting message at about section by  ${req.ip}`);
  res.send("Hello World About!");
});

app.get("/hello", (req, res) => {
  res.send({
    humidity: 30,
    min: 30,
    max: 40,
    postalCode: 75500,
  });
});

app.get("/weather/:weatherData", (req, res) => {
  res.send({
    city: req.params.weatherData,
    humidity: 30,
    min: 30,
    max: 40,
    postalCode: 75500,
  });
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
