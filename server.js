const express = require("express");
const path = require("path");
const cors = require("cors");
require("./db/mongoose");
// const loginRoute = require("./routes/login.routes");
const providersRoute = require("./routes/providers.routes");
const usersRoute = require("./routes/users.routes");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const logger = require("morgan");
var multer = require("multer");
var upload = multer();

const app = express();
app.use(express.json());
app.use(cors());
app.use(logger(":method :url :req[header]"));
// create application/x-www-form-urlencoded parser
const urlencodedParse = app.use(bodyParser.urlencoded({ extended: false }));
// create application/json parser
const jsonParse = app.use(bodyParser.json());

// for parsing multipart/form-data
app.use(upload.array());

app.use("/api/users", usersRoute);
app.use("/api/providers", providersRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`### server run at ${port}`);
});
