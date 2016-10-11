/**
 * Created by tiyalla on 10/11/2016.
 */
angular.module("myApp").controller('MainController',['$scope','forecast' ,function($scope, forecast) {

    var latitude, longitude;
    var change = false;
    $scope.unit = "C";
    var icons={
        'Clear': "wi wi-day-sunny",
        'Clouds': "wi wi-cloudy",
        'Snow': "wi wi-snow",
        'Rain': "wi wi-rain",
        'Drizzle': "wi wi-sprinkle",
        'Thunderstorm': "wi wi-thunderstorm"
    };

    forecast.getLocation().success(function (data) {
        $scope.cityName = data.city;
        $scope.regionName = data.region;
        $scope.countryName = data.country;
        latitude = data.lat;
        longitude = '&lon='+data.lon;
        $scope.loc =  $scope.cityName + ", " + $scope.regionName;
        
        forecast.getWeather(latitude, longitude).success(function (data) {
            //console.log(data);
            $scope.temp = $scope.celsius = Math.round(data.main.temp);
            $scope.fahren = Math.round(($scope.temp * 9) / 5 +32);

            var weatherIcon = data.weather[0].main;
           // console.log(weatherIcon);
            $scope.getIcon = function () {
                return icons[weatherIcon];

            };
        });
    });

    $scope.changeUnit = function () {
        if(change){
            $scope.unit = "C";
            $scope.temp = $scope.celsius;
            return change = false;
        }else{
            $scope.unit = "F";
            $scope.temp = $scope.fahren;
            return change = true;
        }
    }
}]);