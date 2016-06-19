angular.module('dogApp', [
  'config',
  'ngclipboard',
  'ngStorage',
  'ngRoute'

]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/search', {
      templateUrl: 'views/dogs.html',
      controller: 'DogController'
    })
    .when('/random', {
      templateUrl: 'views/random-dog.html',
      controller: 'DogController'
    })
    .otherwise({ redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
}]);
