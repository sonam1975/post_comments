##Post_comment
#Supporting CRUD from API

#CREATE
Route --> '/user-id/song-id/comment' 
           Adds a comment for a particular song of a matching artist for that user's accout.
           '/user-id/song-id/like'
            Adds a like for a particular song of a matching artist for that user's accout.
            '/user-id/song-id/plays'
            Adds number of plays for a particular song id for the user's account
            '/user-id/song-id/repost'
            Adds a number of replay for a particular song of a matching artist for that user's accout.


#READ
Legacy Route --->'/songs'
            returns all the songs and related information like number of plays, number of likes, name of the song etc.
            "/user-id/song-id"
            returns the information about the  particular song of specific artist like comments,song_url, number of likes, number of replays, users who liked(their info like name, image_url), user who reposted(their info like name, image_url)
            
          

#UPDATE

Routes ----> '/user-id/song-id/comment' 
           Updates a comment for a particular song of a matching artist for that user's accout.
           '/user-id/song-id/like'
            Updates  like for a particular song of a matching artist for that user's accout.
            'user-id/song-id/repost'
            Updates a number of repost for a particular song of a matching artist for that user's accout.
            'user-id/song-id/plays'
            Updates the number plays for a particular song id. 

#DELETE

Routes ---> '/user-id/song-id/comment' 
           Deletes a comment for a particular song of a matching artist for that user's account.
           '/user-id/song-id/like'
            Deletes  like for a particular song of a matching artist for that user's accout.
            'user-id/song-id/repost'
            Deletes a number of repost for a particular song of a matching artist for that user's accout.
            'user-id/song-id/plays'
            Deletes the number plays for a particular song id. 
           
