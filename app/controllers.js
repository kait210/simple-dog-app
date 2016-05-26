DogApp.controller('SearchController', ['$scope', '$http', 'ENV', function ($scope, $http, ENV) {

    $scope.alert = "";
    $scope.doggieData = [];
    $scope.zipcode = "";

    $scope.submit = function (formData) {

        if(!$scope.searchForm.$valid) {
            $scope.alert = "Oops, not quite. Please enter a valid zipcode. ";
            return;
        };
    };

    $scope.fetch = function () {
        console.log("fetching...");
        var petfinderAPI = 'http://api.petfinder.com/pet.find?callback=?';

//       Jquery call because $http with Petfinder API results in Unexpected Token bug

      $.getJSON(petfinderAPI, {
      format: "json",
      key: "08e7b59db09418221078809616d96d0e",
      animal: "dog",
      location: $scope.zipcode,
      offset: $scope.offset
    }).done(function(data) {
            if (data.petfinder.pets === undefined) {
            $scope.doggieData = [];
            $scope.offset = 0;
            $scope.alert = "No pups here. Try a different US zipcode";
            return;
            }
            var doggie = data.petfinder.pets.pet;
            $scope.offset =  data.petfinder.lastOffset.$t;
            angular.forEach(doggie, function(value) {

                  var dog = {};
                  dog["name"] = value.name.$t;
                  dog["age"] = value.age.$t;
                  dog["photos"] = value.media.photos.photo;
                  dog["profile"] = value.media.photos.photo[2].$t;
                  dog["options"] = value.options.option;
                  dog["sex"] = value.sex.$t;
                  dog["size"] = value.size.$t;
                  dog["mix"] = value.mix.$t;
                  dog["email"] = value.contact.email.$t;
                  dog["description"] = value.description.$t;
                  dog["breed"] = value.breeds.breed.$t;

              $scope.doggieData.push(dog)
              $scope.alert = "";
              $scope.$apply();
        });
    });
  }
}]);
