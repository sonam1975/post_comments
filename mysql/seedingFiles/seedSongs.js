const { connection } = require("../config.js");

const loadSongs = () => {
  const songs = `load data local infile '../csvGenerator/songs.csv'
     into table songs
     fields terminated by ','
     enclosed by '"'
     lines terminated by '\n'
      ignore 1 rows`;

  connection.query(songs, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successful");
    }
  });
};

loadSongs();
