const {getSongs} = require('./db.js');

const handleGetSongs = (req, res) => {
    const songs = req.body;

    getSongs(songs, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            res.status(200).send(results);
        }
    })
}

module.exports = {handleGetSongs};