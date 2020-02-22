const { connection } = require("../config.js");

const loadUsers = () => {
  const users = `load data local infile '../csvGenerator/users.csv'
     into table users
     fields terminated by ','
     enclosed by '"'
     lines terminated by '\n'
      ignore 1 rows`;

  connection.query(users, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successful");
    }
  });
};
loadUsers();
