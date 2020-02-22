const faker = require("faker");
const fs = require("fs");

const writeArtists = fs.createWriteStream("artists.csv");
writeArtists.write("artists_id,names, images\n", "utf8");

function writeCsvArtists(writer, encoding, callback) {
  let i = 2000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const name = faker.name.firstName() + " " + faker.name.lastName();
      const image = faker.image.imageUrl();

      const data = `${id},${name},${image}\n`;
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

writeCsvArtists(writeArtists, "utf-8", () => {
  writeArtists.end();
});
