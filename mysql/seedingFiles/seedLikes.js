const { connection } = require("../config.js");

const loadLikes = () => {
  const likes = `load data local infile '../csvGenerator/likes.csv'
     into table likes
     fields terminated by ','
     enclosed by '"'
     lines terminated by '\n'
      ignore 1 rows`;

  connection.query(likes, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successful");
    }
  });
};
loadLikes();
