const joi = require("joi");
const express = require("express");

const app = express();
app.use(express.json());

let picks = [{ id: 1, name: "Abe", picks: "" }];

app.get("/", (req, res) => {
  res.send(picks);
});

app.post("/", (req, res) => {
  const pick = {
    id: picks.length + 1,
    name: req.body.name,
    myPicks: req.body.myPicks,
  };

  picks.push(pick);
  res.send(pick);
});

app.listen(3010, () => console.log("Listening..."));
