const express = require("express");
const path = require("path");
const cors = require("cors");
require("./db/mongoose");
// const loginRoute = require("./routes/login.routes");
// const providersRoute = require("./routes/providers.routes");
const usersRoute = require("./routes/users.routes");
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
// app.use(loginRoute);
// app.use(providersRoute);
app.use("/api/users",usersRoute);

if (process.env.NODE_ENV === "production") {
  // app.use(express.static(path.join(__dirname, "../client/build")));

  /*
app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})
*/

  app.get("*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`### server run at ${port}`);
});
