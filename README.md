##Post_comment
#Supporting CRUD from API

#CREATE
Route --> '/user-id/artist/song-name/comment' 
           Adds a comment for a particular song of a matching artist for that user's accout.
           
            '/user-d/artist/song-name/like'
            Adds a like for a particular song of a matching artist for that user's accout.
            
            '/user-id/artist/song-name/repost'
            Adds a number of replay for a particular song of a matching artist for that user's accout.


#READ
Legacy Route --->'/songs'
            returns all the songs and related information like number of plays, number of likes, name of the song etc.
            
            "/artist/song-name"
            returns the information about the  particular song of specific artist like comments,song_url, number of likes, number of replays, users who liked(their info like name, image_url), user who reposted(their info like name, image_url)
            
          

#UPDATE

Routes ----> '/user-id/artist/song-name/comment' 
           Updates a comment for a particular song of a matching artist for that user's accout.
           
            '/user-id/artist/song-name/like'
            Updates  like for a particular song of a matching artist for that user's accout.
            
            'user-id/artist/song-name/repost'
            Updates a number of replay for a particular song of a matching artist for that user's accout.

#DELETE

Routes ---> '/user-id/artist/song-name/comment' 
           Deletes a comment for a particular song of a matching artist for that user's accout.
           
