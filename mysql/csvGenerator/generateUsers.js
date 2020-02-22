const faker = require("faker");
const fs = require("fs");

const writeUsers = fs.createWriteStream("users.csv");
writeUsers.write("users_id,names,usernames, emails, images\n", "utf8");

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const name = faker.name.firstName() + " " + faker.name.lastName();
      const username = faker.internet.userName();

      const emails = faker.internet.email();
      const images = faker.image.imageUrl();

      const data = `${id},${name},${username},${emails},${images}\n`;
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

writeTenMillionUsers(writeUsers, "utf-8", () => {
  writeUsers.end();
});
