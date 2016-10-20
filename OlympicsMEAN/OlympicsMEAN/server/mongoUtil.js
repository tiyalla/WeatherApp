/**
 * Created by tiyalla on 10/20/2016.
 */

//this mongo utility file holds all our connections and our access into collections. puts everything in one spot
"use strict"; //lets us use javascript es2015/16
let mongo = require('mongodb');
let client = mongo.MongoClient; //mongo comes with a connection client
let _db; //used internally

//we export this as a module so we can require it in app.js
module.exports = {
    //call connect to get our connection started
    connect(){
        //all mongo defaults to 27017, we either return error or database instinct
        client.connect('mongodb://localhost:27017/olympics-dev', (err, db)=>{
            if(err){
                //most times error is because we forgot to start mongod
                console.log("Error connecting to Mongo - check mongod connection. Start mongod");
                process.exit(1);
            }
            _db = db;
            console.log("Connected to Mongo");
        });
    },
    sports(){
        return _db.collection('sports');
    }
}