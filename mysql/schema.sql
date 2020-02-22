DROP DATABASE IF EXISTS commentsDb;

CREATE DATABASE commentsDb;

USE commentsDb;


CREATE TABLE users
(
  users_id INT NOT NULL
  AUTO_INCREMENT ,
          names VARCHAR
  (20),
          usernames VARCHAR
  (20),
          emails VARCHAR
  (20),
  images VARCHAR
  (50),
          PRIMARY KEY
  (users_id)
        );

  CREATE TABLE artists
  (
    artists_id INT NOT NULL
    AUTO_INCREMENT,
  names VARCHAR
    (20) ,
  images VARCHAR
    (50) ,
  PRIMARY KEY
    (artists_id)
  );

    CREATE TABLE albums
    (
      albums_id INT NOT NULL
      AUTO_INCREMENT,
  titles VARCHAR
      (20),
      artists_id INT,
      PRIMARY KEY
      (albums_id),
      FOREIGN KEY
      (artists_id) REFERENCES artists
      (artists_id)
  );
      CREATE TABLE likes
      (
        likes_id INT NOT NULL
        AUTO_INCREMENT,
            liked BOOLEAN,
            users_id INT,
            PRIMARY KEY
        (likes_id),
            FOREIGN KEY
        (users_id) REFERENCES users
        (users_id)


          );
        CREATE TABLE reposts
        (
          reposts_id INT NOT NULL
          AUTO_INCREMENT,
            repost BOOLEAN,
            users_id INT,
            PRIMARY KEY
          (reposts_id),
            FOREIGN KEY
          (users_id) REFERENCES users
          (users_id)
          );


          CREATE TABLE songs
          (
            songs_id INT
            AUTO_INCREMENT NOT NULL,
       titles VARCHAR
            (20) NOT NULL,
        play_counts INT,
        albums_id INT,
        likes_id INT,
        reposts_id INT,
        PRIMARY KEY
            (songs_id),
        FOREIGN KEY
            (albums_id) REFERENCES albums
            (albums_id),
        FOREIGN KEY
            (likes_id) REFERENCES likes
            (likes_id),
        FOREIGN KEY
            (reposts_id) REFERENCES reposts
            (reposts_id)

);







            CREATE TABLE comments
            (
              comments_id INT
              AUTO_INCREMENT NOT NULL,
        comment VARCHAR
              (500) ,
        posted DATE,
        song_time TIME,


        songs_id INT,
        users_id INT,
        PRIMARY KEY
              (comments_id),
        FOREIGN KEY
              (songs_id) REFERENCES songs
              (songs_id),
        FOREIGN KEY
              (users_id) REFERENCES users
              (users_id)

       );













