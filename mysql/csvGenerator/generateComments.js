const faker = require("faker");
const fs = require("fs");

const writeComments = fs.createWriteStream("commentsTest.csv");
writeComments.write(
  "comments_id,comment,posted, song_time, songs_id, users_id\n",
  "utf8"
);

function writeInCsvComments(writer, encoding, callback) {
  let i = 200;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;

      const posted = faker.date.recent();
      const comment = faker.random.words();
      const songTime =
        Math.floor(Math.random() * Math.floor(5)) +
        ":" +
        Math.floor(Math.random() * Math.floor(60));
      const songs_id = Math.floor(Math.random() * Math.floor(10000000));
      const users_id = Math.floor(Math.random() * Math.floor(10000000));
      const data = `${id},${comment},${posted},${songTime},${songs_id}, ${users_id}\n`;
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

writeInCsvComments(writeComments, "utf-8", () => {
  writeComments.end();
});
