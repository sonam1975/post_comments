const faker = require("faker");
const fs = require("fs");

const writeReposts = fs.createWriteStream("reposts.csv");
writeReposts.write("reposts_id, users_id, songs_id\n", "utf8");

function writeRepostsInCsv(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;

      const users_id = Math.floor(Math.random() * Math.floor(10000000));
      const songs_id = Math.floor(Math.random() * Math.floor(10000000));

      const data = `${id},${users_id}, ${songs_id}\n`;
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

writeRepostsInCsv(writeReposts, "utf-8", () => {
  writeReposts.end();
});
