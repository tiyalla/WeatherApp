/**
 * Created by tiyalla on 10/19/2016.
 */
import angular from 'angular' /*looking at bundle file?*/
angular.module('olympics', [])
.controller('sportsController', function ($http) {
    //this.sports = ["Weightlifting", "Cycling"];

    //.then signifies use of a promise. arrow function lets us have access to the context of the controller
    /*this on the inside is same with this on the outside. gives it a lexical scope. it binds the object to where
    it was defined */
    $http.get("/sports").then((response)=>{
        this.sports = response.data;
    })
})