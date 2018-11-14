angular.module('dogApp', [
  'config',
  'ngclipboard',
  'ngStorage',
  'ngRoute'

]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('simpledogapp/search', {
      templateUrl: 'views/dogs.html',
      controller: 'DogController'
    })
    .when('simpledogapp/random', {
      templateUrl: 'views/random-dog.html',
      controller: 'DogController'
    })
    .otherwise({ redirectTo: '/simpledogapp'
    });

  $locationProvider.html5Mode(true);
}]);
