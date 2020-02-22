const { connection } = require("../config.js");

const loadComments = () => {
  const comments = `load data local infile '../csvGenerator/comments.csv'
     into table comments
     fields terminated by ','
     enclosed by '"'
     lines terminated by '\n'
      ignore 1 rows`;

  connection.query(comments, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successful");
    }
  });
};
loadComments();
