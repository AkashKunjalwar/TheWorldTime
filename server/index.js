import express from "express";
import fs from "fs";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/api", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  fs.readFile("db.json", "utf8", (err, data) => {
    res.end(data);
  });
});

app.get("/api/:id", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  fs.readFile("db.json", "utf8", (err, data) => {
    const result = JSON.parse(data);
    const id = req.params.id;
    result.regions.map((region) => {
      if (region.id === +id) {
        const mydata = JSON.stringify(region);
        res.end(mydata);
      }
    });
  });
});

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
