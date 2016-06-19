angular.module('dogApp')
.controller('DogController', [
  '$scope',
  'dogDataService',
  'DataStorageService',
  'AdoptableDogs',

  function ($scope, dogDataService, DataStorageService, AdoptableDogs) {

    $scope.doggieData = [];
    $scope.offset = 0;
    var offset = $scope.offset;

    $scope.getRandom = function() {

        AdoptableDogs.getRandom().then(function(response) {
          $scope.randomDog = dogDataService.fillRandom(response);
        });
    }

    $scope.fetch = function() {
      var location = $scope.location;

      AdoptableDogs.getDogs(location, offset).then(function(response) {
          offset = response.data.petfinder.lastOffset.$t;
        angular.forEach(dogDataService.fillIn(response), function(dog) {
          $scope.doggieData.push(dog);
        });
      });
    }

    $scope.clearFetch = function() {
        $scope.doggieData = [];
        offset = 0;
        $scope.fetch();
    }

    $scope.doggies = DataStorageService.getDogs();

    $scope.addtoStorage = function(dog) {
      DataStorageService.addtoStorage(dog);
    }

    $scope.removefromStorage = function(dog) {
       DataStorageService.removefromStorage(dog);
    }

    $scope.clearData = function() {
       DataStorageService.clearData();
    }
}]);
