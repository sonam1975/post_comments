const faker = require("faker");

const allComments = [
  "Great song. Its been great time hearing it",
  "All about it",
  " Come on. I never imagined,",
  "I love this song",
  " this is a sad song that make me cry",
  " mucho dinero por favor",
  "Aloha",
  "I believe u can fly",
  "my man"
];
const commentsPosted = () => {
  return {
    comment:
      allComments[Math.floor(Math.random() * Math.floor(allComments.length))],
    posted: faker.date.recent(),
    song_time:
      Math.floor(Math.random() * Math.floor(5)) +
      ":" +
      Math.floor(Math.random() * Math.floor(60)),
    name: faker.name.firstName() + " " + faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    image: faker.image.imageUrl()
  };
};
module.exports = { commentsPosted };
