const connection = require("../config.js");

const loadAlbums = () => {
  const albums = `load data local infile '../csvGenerator/albums.csv'
     into table albums
     fields terminated by ','
     enclosed by '"'
     lines terminated by '\n'
      ignore 1 rows`;

  connection.connection.query(albums, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("successful");
    }
  });
};

loadAlbums();
