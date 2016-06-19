angular.module('dogApp')
.factory('AdoptableDogs', ['$http', 'ENV', function($http, ENV) {

  var dogs = {};

  dogs.dogsConfig = function(location, offset) {

    var config = {};
    config.params = {};

    config.params.key = ENV.PFKEY;
    config.params.location = location;
    config.params.animal = "dog";
    config.params.count = 100;
    config.params.offset = offset || 0;
    config.params.callback = "JSON_CALLBACK";
    config.params.format = "json";

    return config;
  };

  dogs.getRandom = function() {

    var url = 'http://api.petfinder.com/pet.getRandom?';

    var config = {}
    config.params = {
                        key: ENV.PFKEY,
                        output: "basic",
                        callback: "JSON_CALLBACK",
                        format: "json",
                        animal: "dog"
                    }

      return $http.jsonp(url, config).then(function(response) {

      var statusCode = response.data.petfinder.header.status.code.$t

      if (statusCode === "100") {
      return response;
      } else { return console.log({"error": statusCode,
                       "response": response}) }
      }).catch(function(error) {
          return console.log(error);
      });
  }

  dogs.getDogs = function(location, offset) {

      var apiUrl = 'http://api.petfinder.com/pet.find?';

      var self = this;
      var config = self.dogsConfig(location, offset);

      return $http.jsonp(apiUrl, config).then(function(response) {

      var statusCode = response.data.petfinder.header.status.code.$t

      if (statusCode === "100") {
      return response;
      } else { return console.log({"error": statusCode,
                       "response": response}) }
      }).catch(function(error) {
          return console.log(error);
      });
  };

  return dogs;
}]);
