angular.module('dogApp')
.factory('DataStorageService', ['$localStorage', function($localStorage) {

    $localStorage = $localStorage.$default({
        doggies: []
    });

    var dataStorage = {};

    dataStorage.getDogs = function() {
        return $localStorage.doggies;
    }

    dataStorage.addtoStorage = function(dog) {
        $localStorage.doggies.push(dog);
    }

    dataStorage.removefromStorage = function(dog) {
        $localStorage.doggies.splice( $localStorage.doggies.indexOf(dog), 1 );
    }

    dataStorage.clearData = function() {

        var confirmedDelete = confirm("Are you sure?");

        if (confirmedDelete === true) {
          $localStorage.$reset({
              doggies: []
          });
        }
        else { return };
    }

    return dataStorage;

}]);
