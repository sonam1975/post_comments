DROP DATABASE IF EXISTS soundcloud;

CREATE DATABASE soundcloud;

USE soundcloud;

CREATE TABLE songs (
  SongID int NOT NULL AUTO_INCREMENT,
  song varchar(30),
  likeCount int NOT NULL,
  repostCount int NOT NULL,
  playCount int NOT NULL,
  userImageURL varchar(255),
  PRIMARY KEY (SongID)
);

-- DELIMITER $$
-- CREATE PROCEDURE generate_data()
-- BEGIN
--   DECLARE i INT DEFAULT 0;
--   WHILE i < 100

--     INSERT INTO songs (song, likeCount, repostCount, playCount) VALUES ("How Do I Breathe", FLOOR(RAND()*10000), FLOOR(RAND()*1000), FLOOR(RAND()*1000));
--     INSERT INTO songs (song, likeCount, repostCount, playCount) VALUES ("Sleep", FLOOR(RAND()*10000), FLOOR(RAND()*1000), FLOOR(RAND()*1000));
--     INSERT INTO songs (song, likeCount, repostCount, playCount) VALUES ("Break Away", FLOOR(RAND()*10000), FLOOR(RAND()*1000), FLOOR(RAND()*1000));
--     INSERT INTO songs (song, likeCount, repostCount, playCount) VALUES ("Mad", FLOOR(RAND()*10000), FLOOR(RAND()*1000), FLOOR(RAND()*1000));
--     INSERT INTO songs (song, likeCount, repostCount, playCount) VALUES ("Water Wave", FLOOR(RAND()*10000), FLOOR(RAND()*1000), FLOOR(RAND()*1000));
--     INSERT INTO songs (song, likeCount, repostCount, playCount) VALUES ("idontwannabeyouanymore", FLOOR(RAND()*10000), FLOOR(RAND()*1000), FLOOR(RAND()*1000));
--     INSERT INTO songs (song, likeCount, repostCount, playCount) VALUES ("Lover", FLOOR(RAND()*10000), FLOOR(RAND()*1000), FLOOR(RAND()*1000));
--     SET i = i + 1;
--   END WHILE;
-- END$$
-- DELIMITER ;

-- CALL generate_data();
-- SELECT * FROM songs;