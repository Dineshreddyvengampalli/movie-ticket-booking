var express = require("express");

var moviesRouter = require("./src/routes/movies");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/movies", moviesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

let db = require("./src/services/dbConfig");

app.listen(4000, () => {
  console.log("server is running on 4000");
});
module.exports = app;
