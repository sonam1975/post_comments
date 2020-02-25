const db = require("./db.js");

const handleGetSongs = (req, res) => {
  const id = req.body.songs_id;

  db.getSongs(id, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).end();
    } else {
      res.status(200).send(results);
    }
  });
};
const handleGetLikedUsers = (req, res) => {
  const songs = req.body;
};
const handleGetRepostedUsers = (req, res) => {
  const songs = req.body;
};

const handlePostSongs = (req, res) => {};
const handleUpdateSongs = (req, res) => {};

const handleDeleteSongs = (req, res) => {};

module.exports = {
  handleGetSongs,
  handleGetLikedUsers,
  handleGetRepostedUsers,
  handlePostSongs,
  handleUpdateSongs,
  handleDeleteSongs
};
