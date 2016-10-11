/**
 * Created by tiyalla on 10/11/2016.
 */
angular.module("myApp").factory('forecast', ['$http', function ($http) {
    var obj ={};

    obj.getLocation = function(){
        return $http.jsonp("http://ip-api.com/json/?callback=JSON_CALLBACK");
    };

    obj.getWeather = function(lat, lon){
        var apiURL ='http://api.openweathermap.org/data/2.5/weather?lat=';
        var appID = '&APPID=8de47079b8fb0d855f7de10269291ea7';
        var units = '&units=metric';
        var cb = "&callback=JSON_CALLBACK";
        return $http.jsonp(apiURL+lat+lon+units+appID+cb);
    };
    return obj;
    // return $http.get().success(function (data) {
    //     return data;
    // })
    //     .error(function (err) {
    //         return err;
    //     })
}]);