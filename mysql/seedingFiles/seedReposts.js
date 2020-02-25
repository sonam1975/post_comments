const { connection } = require("../config.js");

const loadReposts = () => {
  const reposts = `load data local infile '../csvGenerator/reposts.csv'
     into table reposts
     fields terminated by ','
     enclosed by '"'
     lines terminated by '\n'
      ignore 1 rows`;

  connection.query(reposts, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successful");
    }
  });
};
loadReposts();
