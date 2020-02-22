/*eslint-disable*/
const faker = require("faker");
const { commentsPosted } = require("./comments.js");

const mongoose = require("mongoose");
require("events").EventEmitter.prototype._maxListeners = 1000;
const { Songs } = require("../config.js");

async function seedDB(outer, inner) {
  let counter = 0;
  for (let j = 0; j < outer; j++) {
    let inputArr = [];
    for (let i = 0; i < inner; i++) {
      let obj = {
        songs_id: counter,
        titles: faker.random.words(),
        artistNames: faker.name.findName(),
        albumName: faker.random.word(),
        imageUrl: faker.image.imageUrl(),
        plays: Math.floor(Math.random() * Math.floor(10000000)),
        likes: Math.floor(Math.random() * Math.floor(20000000)),
        reposts: Math.floor(Math.random() * Math.floor(20000000)),
        comments: [
          commentsPosted(),
          commentsPosted(),
          commentsPosted(),
          commentsPosted(),
          commentsPosted()
        ]
      };
      inputArr.push(obj);
      counter++;
    }
    console.log("done");
    await Songs.insertMany(inputArr);
  }
}

seedDB(1000, 10000)
  .then(() => {
    console.log("success");
  })
  .catch(err => {
    console.log(err);
  });
