const express = require("express");
const morgan = require("morgan");
const mongoose = require('mongoose');
const path = require("path");
const { engine } = require("express-handlebars");

const route = require('./routes');

const app = express();
const port = 3000;

const db = require('./config/db');

//Connect Database
db.connect();

//Static file
app.use(express.static(path.join(__dirname, "public")));

//HTTP Logger
app.use(morgan("combined"));

//Templates engine
app.engine(
  "hbs",
  engine({
    extname: "hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));


// Routes init
route(app);


app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);


