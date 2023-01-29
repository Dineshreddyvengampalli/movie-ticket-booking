const Movies = require("../model/movies");
const showsTime = require("../model/showTime");
const theaters = require("../model/theaters");
const bookTicket = require("../model/bookTicket");

const getMoviesByName = async (req, res) => {
  try {
    const mov = await Movies.find({ title: req.query.title });
    return res.json({
      Status: 200,
      movie: mov,
    });
  } catch (err) {
    return res.json({
      Status: 500,
      error: "server error" + err,
    });
  }
};

const getTheatersByName = async (req, res) => {
  try {
    const thea = await theaters.find({ location: req.query.location });
    return res.json({
      Status: 200,
      theater: thea,
    });
  } catch (err) {
    return res.json({
      Status: 500,
      error: "server error" + err,
    });
  }
};

const getShowTimings = async (req, res) => {
  try {
    const bT = await showsTime.find();
    return res.json({
      Status: 200,
      showsTime: bT,
    });
  } catch (err) {
    return res.json({
      Status: 500,
      error: "server error" + err,
    });
  }
};

const addMovies = async (req, res) => {
  const { title, description, language } = req.body;
  try {
    const movies = new Movies({
      title,
      description,
      language,
    });
    const mov = await movies.save();
    return res.json({
      Status: 200,
      movie: mov,
    });
  } catch (err) {
    return res.json({
      Status: 500,
      error: "server error" + err,
    });
  }
};

const addTheater = async (req, res) => {
  const { name, location, movies } = req.body;
  try {
    const theater = new theaters({
      name,
      location,
      movies,
    });
    const thea = await theater.save();
    return res.json({
      Status: 200,
      theater: thea,
    });
  } catch (err) {
    return res.json({
      Status: 500,
      error: "server error" + err,
    });
  }
};

const addShowTime = async (req, res) => {
  const { Type, Timing } = req.body;
  try {
    const shows = new showsTime({
      Type,
      Timing,
    });
    const show = await shows.save();
    return res.json({
      Status: 200,
      shows: show,
    });
  } catch (err) {
    return res.json({
      Status: 500,
      error: "server error" + err,
    });
  }
};

const bookTickets = async (req, res) => {
  const { user, theater_Id, movie_Id, show_Id } = req.body;
  try {
    const shows = new bookTicket({
      user,
      theater_Id,
      movie_Id,
      show_Id,
    });
    const show = await shows.save();
    return res.json({
      Status: 200,
      shows: show,
      msg: "Successfully booked",
    });
  } catch (err) {
    return res.json({
      Status: 500,
      error: "server error" + err,
    });
  }
};

const rescheduleBooking = async (req, res) => {
  const { user, theater_Id, movie_Id, show_Id } = req.body;
  try {
    const ticketData = await bookTicket.findById(req.params.id);
    (ticketData.user = user),
      (ticketData.theater_Id = theater_Id),
      (ticketData.movie_Id = movie_Id),
      (ticketData.show_Id = show_Id);
    let updateTicket = await ticketData.save();
    return res.json({
      Status: 200,
      bT: updateTicket,
    });
  } catch (err) {
    return res.json({
      Status: 500,
      error: "server error" + err,
    });
  }
};

module.exports.getMoviesByName = getMoviesByName;
module.exports.getTheatersByName = getTheatersByName;
module.exports.getShowTimings = getShowTimings;
module.exports.addMovies = addMovies;
module.exports.addTheater = addTheater;
module.exports.addShowTime = addShowTime;
module.exports.bookTickets = bookTickets;
module.exports.rescheduleBooking = rescheduleBooking;
