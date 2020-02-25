const { connection } = require("./config.js");

const getSongs = (id, callback) => {
  const querySong = `SELECT songs.playCount AS playCount, users.name AS likedUsers,
  users.name AS reposted Users
  FROM ((songs
    INNER JOIN liked ON ${id}=liked.songs_id)
    INNER JOIN reposted ON ${id}=reposted.songs_id)`;

  connection.query(querySong, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

const getLikedUsers = (id, callback) => {
  const getUsers = `SELECT users.name FROM users
                    INNER JOIN likes
                    WHERE likes.songs_id = ${id}`;
  connection.query(getUsers, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

const getRepostedUsers = () => {
  const getUsers = `SELECT users.name FROM users
                    INNER JOIN reposts
                    WHERE reposts.songs_id = ${id}`;
  connection.query(getUsers, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

//all the post requests
const postSongs = () => {};
const updateLikes = () => {};
const updateReposts = () => {};
const deleteSongs = () => {};

module.exports = {
  getSongs,
  getLikedUsers,
  getRepostedUsers,
  postSongs,
  updateLikes,
  updateReposts,
  deleteSongs
};
