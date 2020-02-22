const faker = require("faker");
const fs = require("fs");

const writeAlbums = fs.createWriteStream("albums.csv");
writeAlbums.write("albums_id,titles, artists_id\n", "utf8");

function writeAlbumsInCsv(writer, encoding, callback) {
  let i = 1000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;

      const title = faker.random.words();
      const randomArtist = Math.floor(Math.random() * Math.floor(10000000));

      const data = `${id},${title},${randomArtist}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once("drain", write);
    }
  }
  write();
}

writeAlbumsInCsv(writeAlbums, "utf-8", () => {
  writeAlbums.end();
});
