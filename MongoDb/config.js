/*eslint-disable*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect(
  "mongodb://localhost/post_comments",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("database created");
  }
);

const songsSchema = new Schema({
  songs_id: Number,
  titles: String,
  artistName: String,
  albumName: String,
  imageUrl: String,
  plays: Number,
  likes: Number,
  reposts: Number,
  comments: [
    {
      comments_id: Number,
      comment: String,
      posted: Date,
      song_time: String,
      name: String,
      username: String,
      email: String,
      image: String
    }
  ]
});

let Songs = mongoose.model("Songs", songsSchema);

module.exports = { Songs };
