const express = require("express");

const connect = require("./configs/db");

const bookController = require("./controllers/book.controller");
 
const app = express(); 
  
app.use(express.json());

app.use("/books", bookController);

app.listen(2345, async function () {
  try {
    await connect();
    console.log("listening on port 2345");
  } catch (e) {
    console.log(e.message);
  }
});
