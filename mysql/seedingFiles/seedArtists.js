const { connection } = require("../config.js");

const loadArtists = () => {
  const artists = `load data local infile '../csvGenerator/artists.csv'
     into table artists
     fields terminated by ','
     enclosed by '"'
     lines terminated by '\n'
      ignore 1 rows`;

  connection.query(artists, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successful");
    }
  });
};
loadArtists();
