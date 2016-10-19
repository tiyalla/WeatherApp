/**
 * Created by tiyalla on 10/19/2016.
 */
"use strict" /*use let & other js features without node generating warnings*/

let express = require("express");
let app = express();

app.use(express.static(__dirname + "/../client")); /*using static middleware, built in express core.
takes an argument which is the directory where we should read static files from */

/*first end point */
app.get("/sports", (request, response) =>{
    response.json(["Cycling", "Weightlifting"]); //sample data. not interacting with the database yet
});


app.listen(8181, () => console.log("Listening on 8181")); /*bind to a port */