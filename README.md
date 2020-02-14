##Post_comment
#Supporting CRUD from API

#CREATE
                      Route and Info




           'POST /songs/comment' 
            Adds a comment for a particular song of a matching artist for that user's accout. 
            req.body = {
              user-id: INT
              user: String,
              comment: String
              }
              
                    responses with a status of whether it is posted or not. 
           
           'POST /songs/like'
            Adds a like for a particular song of a matching artist for that user's accout.
            req.body = {
              user-id: INT,
              user-name; String,
              like: INT
            }
                          responses with a status of whether it is posted or not. 

            'POST /songs/plays'
            Adds number of plays for a particular song id for the user's account
            
            req.body = {
              user-id: INT,
              user-name; String,
              playsCount: INT
            }
                          responses with a status of whether it is posted or not. 

            'POST /songs/repost'
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
            song: [
                    {
                      'id': Number,
                      'songName': String,
                      'artist': String,
                      
                      'user': [
                        {
                          id: Number,
                          'imageUrl': String,
                          'userName': String,
                          'comments': String,
                          'likeCount': Number,
                          'repostCount': Number,
                          'playCount': Number
                        }
                      ]
                    }
                  ]
            
            'GET /songs/comments'
            returns all the comments for a particular song which would be a JSON object.
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
                        
                        
             'GET /songs/likes'
            returns all the number of likes for a particular song which would be a number
            likes : INT
            
            
            
            'GET /songs/repost'
            returns all the number of reposts for a particular song which would be a number
            repost : INT
            
            
            
            'GET /songs/playsCount'
            returns all the number of likes for a particular song which would be a number
            playsCount : INT
                        
              
            
          

#UPDATE
                                  Route and Info



           'PUT /songs/user:name/user:id/comment' 
           Updates a comment for a particular song of a matching artist for that user's accout.
           req.body = {
            user-name:String,
            user-id: INT,
            comment: String
          }
          
                       responses with a status of whether it is updated or not. 

           
           
           
           'PUT /songs/user:name/user:id/like'
            Updates  like for a particular song of a matching artist for that user's accout.
            req.body = {
              user-name:String,
              user-id: INT,
              likeCount: INT
          }
            
                          responses with a status of whether it is updated or not. 

            
            
            'PUT /songs/user:name/user:id/repost'
            Updates a number of repost for a particular song of a matching artist for that user's accout.
            req.body = {
              user-name:String,
              user-id: INT,
              repostCount: INT
          }
                          responses with a status of whether it is updated or not. 

            
            
            
            'PUT /songs/user:name/user:id/plays'
            Updates the number plays for a particular song id. 
            
            req.body = {
              user-name:String,
              user-id: INT,
              playsCount: INT
          }
                 responses with a status of whether it is updated or not. 
                 
                 
                 

#DELETE
                                 Route and Info       



           'DELETE /songs/user:name/user:id/comment' 
           Deletes a comment for a particular song of a matching artist for that user's account.
           req.body = {
              user-name:String,
              user-id: INT,
              comment: String
          }
          
          gets a respond with status completed or not 
           
           
           
         
            
       
           
