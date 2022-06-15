const express = require("express");
const morgan = require("morgan");

const path = require("path");
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;

//Static file
app.use(express.static(path.join(__dirname, "public")));
console.log('path + ' + path.join(__dirname,"public"));
// app.use('/public', express.static(path.join(__dirname, "public")));

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

app.set("views", path.join(__dirname, "resources/views"));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
