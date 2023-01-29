let mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

mongoose.connect(process.env.mongoCluster, (err, res) => {
  if (err) {
    console.log("getting error in db" + err);
  } else {
    console.log("connected to DB");
  }
});
