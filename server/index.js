//initialize express server, creating the server
const express = require("express");
const app = express();
const cors = require('cors');

//Fix issues of parsing using express
app.use(express.json());

app.use(cors());

const db = require("./models");

//Routers, the middleware
const postRouter = require('./routes/Posts');
app.use('/posts', postRouter);



//Connecting to the DB
db.sequelize.sync().then(() => {
  //app listener
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});