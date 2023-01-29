var express = require("express");
var router = express.Router();
const controller = require("../controller/controller");

router.get("/", function (req, res, next) {
  res.send("Hello from root ! ");
});

router.get("/movie", controller.getMoviesByName);

router.get("/location", controller.getTheatersByName);

router.get("/show", controller.getShowTimings);

router.post("/movie", controller.addMovies);

router.post("/theater", controller.addTheater);

router.post("/show", controller.addShowTime);

router.post("/ticket", controller.bookTickets);

router.put("/ticket/:id", controller.rescheduleBooking);

module.exports = router;
