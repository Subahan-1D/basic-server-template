const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 9000;
// config
require("dotenv").config();
//MIDDLEWARE
app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
  res.send({ data: "final project server side " , status : 200});
});

app.listen(port, () => {
  console.log(`server running on port : ${port}`);
});