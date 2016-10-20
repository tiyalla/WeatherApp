/**
 * Created by tiyalla on 10/19/2016.
 */
"use strict" /*use let & other js features without node generating warnings*/

let express = require("express");
let app = express();
let mongoUtil = require('./mongoUtil');//we use ./ because it's a local module not a npm module
mongoUtil.connect();

app.use(express.static(__dirname + "/../client")); /*using static middleware, built in express core.
takes an argument which is the directory where we should read static files from */

/*first end point */
app.get("/sports", (request, response) =>{
    let sports = mongoUtil.sports();
    //toArray - native driver function
    sports.find().toArray((err, docs)=>{
        console.log(JSON.stringify(docs));
        //remove names and returns them individually using the help of a map function.
        //map function takes one arg which is a function. return is an array
        let sportNames = docs.map((sport)=>sport.name);
        response.json(sportNames);
    })
   // response.json(["Cycling", "Weightlifting"]); //sample data. not interacting with the database yet
});


app.listen(8181, () => console.log("Listening on 8181")); /*bind to a port */