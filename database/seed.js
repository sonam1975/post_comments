const faker = require('faker');
const mysql = require('mysql');
const {connection} = require('./config.js');

// Create some sample images URL using faker for users
const makeFakeImage = () => {

    for (var i=0; i<100; i++) {
        connection.query(`INSERT INTO songs (song, likeCount, repostCount, playCount, userImageURL) VALUES (?, ?, ?, ?, ?)`,
        [faker.lorem.words(), faker.random.number(1000000), faker.random.number(1000) , faker.random.number(1000), faker.image.imageUrl()], 
        (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log('success');
            }
        })
    }
};

makeFakeImage();