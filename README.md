##Post_comment
#Supporting CRUD from API

#CREATE
                      Route and Info




           'POST /songs/:songs-id/comment' 
            Adds a comment for a particular song of a matching artist for that user's accout. 
            req.body = {
              user-id: INT
              user: String,
              comment: String
              }
              
                    responses with a status of whether it is posted or not. 
           
           'POST /songs/:song-id/like'
            Adds a like for a particular song of a matching artist for that user's accout.
            req.body = {
              user-id: INT,
              user-name; String,
              like: INT
            }
                          responses with a status of whether it is posted or not. 

            'POST /songs/:song-id/plays'
            Adds number of plays for a particular song id for the user's account
            
            req.body = {
              user-id: INT,
              user-name; String,
              playsCount: INT
            }
                          responses with a status of whether it is posted or not. 

            'POST /songs/:song-id/repost'
            Adds a number of replay for a particular song of a matching artist for that user's accout.
            
            req.body = {
             user-id: INT,
              user-name; String,
              like: INT
            }
                          responses with a status of whether it is posted or not. 



#READ
                                 Route and Info
                                 
             'GET /songs' - Legacy Route
            returns a JSON object containing the information about the song 
            
                    songs:[{
                      'id': Number,
                      'songName': String,
                      'artist': String,
                      'album': String,
                      'releasedDate': Date},
                      .
                      .
                      .
                      .
                      .
                      .
                      .
                      'id': Number,
                      'songName': String,
                      'artist': String,
                      'album': String,
                      'releasedDate': Date
                      
                    ]
            
            'GET /songs/songs-id/comments'
            returns all the comments for a particular song by all the users which would be a JSON object.
            comments :[ {'userName':String,
                        'userId' : INT, 
                        'comment': String},
                        .
                        .
                        .
                        .
                        .
                        {'userName':String,
                        'userId' : INT, 
                        'comment': String}
                        ]
                        
                        
             'GET /songs/song-id/likes'
            returns total number of likes for a particular song which would be a number
            likes : INT
            
            
            
            'GET /songs/song-id/reposts'
            returns total number of reposts for a particular song which would be a number
            repost : INT
            
            
            
            'GET /songs/song-id/playsCount'
            returns all the number of likes for a particular song which would be a number
            playsCount : INT
            
            'GET /songs/:song-id/username/:user-id/comment'
            gets the comment date and time posted by the user for the particular song
            {comment: String,
            Date: Date,
            PostedTime: Time,
            timeSpan: Time
            }
            
            
            
                        
              
            
          

#UPDATE
                                  Route and Info



           'PUT /songs/:song-id/:username/:user-id/comment' 
           Updates a comment for a particular song of a matching artist for that user's accout.
           req.body = {
           
            user-id: INT,
            comment: String
          }
          
                       responses with a status of whether it is updated or not. 

           
           
           
           'PUT /songs/:song-id/:username/:user-id/like'
            Updates  like for a particular song of a matching artist for that user's accout.
            req.body = {
              user-name:String,
              user-id: INT,
              likeCount: INT(Either 1 or 0)
          }
            
                          responses with a status of whether it is updated or not. 

            
            
            'PUT /songs/:song-id/:username/:user-id/repost'
            Updates a number of repost for a particular song of a matching artist for that user's accout.
            req.body = {
              user-name:String,
              user-id: INT,
              repostCount: INT
          }
                          responses with a status of whether it is updated or not. 

            
            
            
            'PUT /songs/song-id/:username/:user-id/playsCount'
            Updates the number plays for a particular song id. 
            
            req.body = {
              user-name:String,
              user-id: INT,
              playsCount: INT
          }
                 responses with a status of whether it is updated or not. 
                 
                 
            
  #DELETE
                                 Route and Info       



           'DELETE /songs/song-id/:username/:user-id/comment' 
           Deletes a comment for a particular song of a matching artist for that user's account.
           req.body = {
              user-name:String,
              user-id: INT,
              comment: String
          }
          
          gets a respond with status completed or not 
          
          
          'DELETE /songs/song-id/:username/:user-id
           Deletes the song
           req.body = {
             
              user-id: INT,
              song-id: INT
          }
          
          gets a respond with status completed or not 
          
          
          'DELETE /album/album-id/:username/:user-id
           Deletes the album from the user's account
           req.body = {
             
              user-id: INT,
              album-id: INT
          }
          
          gets a respond with status completed or not 
          
          
          'DELETE /album/album-id/:username/:user-id
           Deletes the album from the user's account
           req.body = {
             
              user-id: INT,
              album-id: INT
          }
          
          gets a respond with status completed or not 
           
           
           
         
            
       
           
