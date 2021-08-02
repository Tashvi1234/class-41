class Player{
    constructor () {
        this.name = null;   // player name
        this.distance = 0;   // distance
        this.index = null;
        this.rank = null ;
    }
    
    // get the carsAtEnd from DB
    getCarsAtEnd(){
        var rankRef = database.ref ('/carsAtEnd');
        // listen to carsAtEnd changes in DB
       rankRef.on ("value", 
                        (data)=>{
                            this.rank = data.val ();
                        }
        );        

        
    }

    //writing rank or carsAtEnd to the database
    static updateCarsAtEnd (rank) {
        database.ref('/').update ({carsAtEnd : rank});
    }
    
    // gets playerCount from DB
    getPlayerCount () {
         //refer to playerCount location in DB

         var playerCountRef = database.ref ('/playerCount');
         // listen to playerCount changes in DB
         playerCountRef.on ("value", 
                         function(data){
                             playerCount = data.val ();
                         }
         );        
    }
    // write playerCount from DB
    updatePlayerCount (count) {
         var playerCountRef = database.ref ('/');
        playerCountRef.update({"playerCount" : count});
    }

    // get player Info from DB
    static getPlayerInfo () {
        var playerRef = database.ref('/players');
        playerRef.on ("value", 
        function(data){
            allPlayers = data.val ();
        }
        );        
    }

    // write player name and distance to DB
    updatePlayerNameAndDistance () {
        var playerIndex ="/players/player"+this.index;
        var playerRef = database.ref (playerIndex).set (
            {
                name:this.name,
                distance:this.distance     
            }
        );
    
    }

}