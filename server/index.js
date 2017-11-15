const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const massive = require("massive");
const port = 3001;

//create your own dotenv file.
require("dotenv").config();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set("db", dbInstance);
});

app.post("/api/person", (req, res) => {
  const name = req.body.name;
  const number = req.body.number;
  // const {name, number} = req.body
  req.app
    .get("db")
    .postNewUser([name, number])
    .then(users => {
      return res.status(200).json(users);
    })
    .catch(err => {
      console.log("err: ", err);
    });
});

app.get("/api/people", (req, res) => {
  req.app
    .get("db")
    .getUsers()
    .then(users => {
      return res.status(200).json(users);
    })
    .catch(console.log);
});

app.listen(port, console.log("listening on " + port));
