const { connection } = require("./config.js");

const getPlayCountForASong = () => {
  const get = "select * from reposts ORDER BY reposts_id DESC LIMIT 1;";
  connection.query(get, (err, result, callback) => {
    if (err) {
      console.log(err);
    } else {
      callback(null, result);
    }
  });
};

const handleGetAllComments = (req, res) => {};

const handleGetAllLikedUsers = (req, res) => {};

const handleGetAllRepostedUsers = (req, res) => {};
