//initialize express server, make api requests
const express = require("express");
const app = express();
const db = require("./models");

//create DB link
db.sequelize.sync().then(() => {
  //adding app listener
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});