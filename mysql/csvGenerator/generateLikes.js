const faker = require("faker");
const fs = require("fs");

const writeLikes = fs.createWriteStream("likes.csv");
writeLikes.write("likes_id,liked, users_id\n", "utf8");

function writeLikesInCsv(writer, encoding, callback) {
  let i = 2000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;

      const liked = true;
      const users_id = Math.floor(Math.random() * Math.floor(12000000));

      const data = `${id},${liked},${users_id}\n`;
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

writeLikesInCsv(writeLikes, "utf-8", () => {
  writeLikes.end();
});
