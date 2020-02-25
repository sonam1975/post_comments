const faker = require("faker");
const fs = require("fs");

const writeSongs = fs.createWriteStream("songs.csv");
writeSongs.write("songs_id,titles,play_counts, albums_id\n", "utf8");

function writeSongsInCsv(writer, encoding, callback) {
  let i = 100;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;

      const titles = faker.random.words();
      const albums_id = Math.floor(Math.random() * Math.floor(5000000));
      const play_count = Math.floor(Math.random() * Math.floor(4000000));
      const data = `${id},${titles},${play_count},${albums_id}\n`;
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

writeSongsInCsv(writeSongs, "utf-8", () => {
  writeSongs.end();
});
