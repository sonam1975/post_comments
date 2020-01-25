DROP DATABASE IF EXISTS soundcloud;

CREATE DATABASE soundcloud;

USE soundcloud;

CREATE TABLE songs (
  SongID int NOT NULL AUTO_INCREMENT,
  song varchar(30),
  likeCount int NOT NULL,
  repostCount int NOT NULL,
  playCount int NOT NULL,
  PRIMARY KEY (SongID)
);

INSERT INTO songs (song, likeCount, repostCount, playCount) VALUES ("How Do I Breathe", 10, 4, 3);
INSERT INTO songs (song, likeCount, repostCount, playCount) VALUES ("Sleep", 10, 4, 3);
INSERT INTO songs (song, likeCount, repostCount, playCount) VALUES ("Break Away", 10, 4, 3);
INSERT INTO songs (song, likeCount, repostCount, playCount) VALUES ("Mad", 13, 41, 3);
INSERT INTO songs (song, likeCount, repostCount, playCount) VALUES ("Water Wave", 434, 4, 3);
INSERT INTO songs (song, likeCount, repostCount, playCount) VALUES ("idontwannabeyouanymore", 23, 1, 13);
INSERT INTO songs (song, likeCount, repostCount, playCount) VALUES ("Lover", 13, 1, 13);


SELECT * FROM songs;