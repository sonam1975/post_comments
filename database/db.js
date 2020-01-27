
const {connection} = require('./config.js');

const getSongs = (song, callback) => {
    var sql = 'SELECT * FROM songs';
    connection.query(sql, (error, results, fields) => {
        if (error) {
            console.log(error);
            callback(error);
        } else {
            const songs = results.map((music) => ({
                song: music.song,
                likeCount: music.likeCount,
                repostCount: music.repostCount,
                playCount: music.playCount,
                userImageURL: music.userImageURL
            }));
            // console.log(songs);
            callback(null, songs);
        }
    })
};

module.exports = {getSongs};