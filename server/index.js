const express = require("express");
const app = express();
const port = 8000;
const morgan = require("morgan");
const path = require("path");
const Controller = require("../mysql/controller.js");

app.use(morgan("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));
//all the get API routes
app.get("/songs", Controller.handleGetSongs); //legacyroute
//get all the comments, likeCounts, repostsCount, number of times played, user Image
app.get("/songs/likes", Controller.handleGetLikedUsers);
app.get("/songs/reposts", Controller.handleGetRepostedUsers);

//all the post routes
app.post("/songs", Controller.handlePostSongs);

//all the update routes
app.patch("/songs", Controller.handleUpdateSongs);

//all teh delete routes
app.delete("/songs", Controller.handleDeleteSongs);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
