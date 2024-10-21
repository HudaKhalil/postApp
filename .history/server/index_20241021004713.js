//initialize express server, creating the server
const express = require("express");
const app = express();
const db = require("./models");

//Connecting to the DB
db.sequelize.sync().then(() => {
  //app listener
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});