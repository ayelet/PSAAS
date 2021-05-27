// const dotenv = require("dotenv");
// require("dotenv").config();
// dotenv.config({ path: "ENV_FILENAME" });
const mongoose = require("mongoose");

// const uri = process.env.MONGODB || "test";
const uri = require("../config/keys").databaseUri;
const connection = mongoose.connection;

mongoose.connect(
  uri,
  {
    // useMongoClient:true ,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to databse");
    }
    console.log("Connected to models: ", client.models);
  }
);

connection
  .once("open", () => {
    let dbConnection = uri.slice(0, 20);

    console.log("*** Connected to: ", dbConnection);
  })
  .on("error", function (error) {
    console.log("Error is: ", error);
  });
