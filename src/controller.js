const Movies = require("../dbConfig/model/movies");
const showsTime = require("../dbConfig/model/showTime");
const theaters = require("../dbConfig/model/theaters");
const bookTicket = require("../dbConfig/model/bookTicket");

const getMoviesByName = async (req, res) => {
  try {
    const mov = await Movies.findById(req.params.movieName);
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
    const thea = await theaters.findById(req.params.location);
    return res.json({
      Status: 200,
      Employee: thea,
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
    const bT = await bookTicket.find();
    return res.json({
      Status: 200,
      Employee: bT,
    });
  } catch (err) {
    return res.json({
      Status: 500,
      error: "server error" + err,
    });
  }
};

const addMovies = async (req, res) => {
  const { movie_title } = req.body;
  try {
    const movies = new Movies({
      movie_title,
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
  const { theaters_name, location, movies } = req.body;
  try {
    const theater = new theaters({
      theaters_name,
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
  const { show_Type, show_Timing } = req.body;
  try {
    const shows = new showsTime({
      show_Type,
      show_Timing,
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
  const { theater_Id, movie_Id, show_Id } = req.body;
  try {
    const shows = new bookTicket({
      theater_Id,
      movie_Id,
      show_Id,
    });
    const show = await shows.save();
    return res.json({
      Status: 200,
      shows: show,
      msg: "completed Successfully",
    });
  } catch (err) {
    return res.json({
      Status: 500,
      error: "server error" + err,
    });
  }
};

const rescheduleBooking = async (req, res) => {
  const { theater_Id, movie_Id, show_Id } = req.body;
  try {
    const ticketData = await bookTicket.findById(req.params.id);
    (ticketData.theater_Id = theater_Id),
      (ticketData.movie_Id = movie_Id),
      (ticketData.show_Id = show_Id);
    let bookTicket = await ticketData.save();
    return res.json({
      Status: 200,
      bT: bookTicket,
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
