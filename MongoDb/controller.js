const { getSongs } = require("./db.js");

const handleGetSongs = (req, res) => {
  const songs = req.body;

  getSongs(songs, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).end();
    } else {
      res.status(200).send(results);
    }
  });
};

const handleGetIndividualComment = (req, res) => {};

const handleGetAllComments = (req, res) => {
  const comments = req.body;
};

const handlePostComment = (req, res) => {};

const handleUpdateComment = (req, res) => {};

const handleDeleteIndividualComment = (req, res) => {};
const handleDeleteAllComments = (req, res) => {};

module.exports = {
  handleGetSongs,
  handleGetIndividualComment,
  handleGetAllComments,
  handlePostComment,
  handleUpdateComment,
  handleDeleteIndividualComment,
  handleDeleteAllComments
};
