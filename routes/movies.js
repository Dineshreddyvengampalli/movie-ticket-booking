var express = require("express");
var router = express.Router();
const controller = require("../src/controller");
router.get("/", function (req, res, next) {
  res.send("hi employees");
});

router.get("/movie/:movieName", controller.getMoviesByName);

router.get("/location/:location", controller.getTheatersByName);

router.get("/show", controller.getShowTimings);

router.post("/movie", controller.addMovies);

router.post("/theater", controller.addTheater);

router.post("/showTime", controller.addShowTime);

router.post("/bookTickets", controller.bookTickets);

router.put("/:id", controller.rescheduleBooking);

module.exports = router;
