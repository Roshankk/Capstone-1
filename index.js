const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./Routes/Routes");

const app = express();
// ------
const mongoose = require("mongoose");
mongoose.connect(
   "mongodb+srv://Roshanmongo:Roshan12345@cluster0.o32zq7s.mongodb.net/mumbai?retryWrites=true",
  { useNewUrlParser: true }
);
mongoose.connection
  .once("open", () => {
    console.log("connected to DataBase");
  })
  .on("error", (err) => {
    console.log("some error occured", err);
  });
// ------
app.use(cors());
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("its meeeeee");
// });
app.use("/api", routes);

app.listen(8001, () => {
  console.log("running on port  8001");
});
