angular.module('dogApp')
.factory('dogDataService', [ function(){

    var allDogs = {};

    allDogs.fillIn = function(response) {

      var doggie = response.data.petfinder.pets.pet;
      var doggieData = [];

      angular.forEach(doggie, function(value) {

        var dog = {};

        dog["name"] = value.name.$t;
        dog["id"] = value.id.$t;
        dog["age"] = value.age.$t;
        if (value.age.$t == "Baby") { dog["age"] = "Puppy" }

        if (value.media.photos) {
        dog["photos"] = value.media.photos.photo;
        dog["profile"] = value.media.photos.photo[2].$t;
        }

        dog["sex"] = value.sex.$t;
        dog["size"] = value.size.$t;
        dog["options"] = [];
        dog["newoptions"] = [];


        switch(value.sex.$t){
            case "F":
                dog["sex"] = "Female";
                break;
            case "M":
                dog["sex"] = "Male";
                break;
        }

        switch(value.size.$t) {
            case "S":
                dog["size"] = "Small";
                break;
            case "M":
                dog["size"] = "Medium";
                break;
            case "L":
                dog["size"] = "Large";
                break;
            case "XL":
                dog["size"] = "Giant";
                break;
        }

        if (value.mix.$t == "yes") { dog["mix"] = value.mix.$t;}
        dog["email"] = value.contact.email.$t;
        dog["description"] = value.description.$t;
        dog["shelterId"] = value.shelterId.$t;
        dog["breed"] = value.breeds.breed.$t;

        if (Array.isArray(value.options.option)) {
                angular.forEach(value.options.option, function(newValue) {
                  dog["options"].push(newValue.$t);
                });
            } else if (!Array.isArray(value.options.option) && value.options.option) {
            dog["options"].push(value.options.option.$t);
            }

        angular.forEach(dog["options"], function(option){
          switch(option) {
            case "hasShots":
                dog["newoptions"].push("Shots Up-to-Date")
                break;
            case "noCats":
                dog["newoptions"].push("Cannot live with Cats")
                break;
            case "noDogs":
                dog["newoptions"].push("Cannot live with Dogs")
                break;
            case "specialNeeds":
                dog["newoptions"].push("**Special Needs**");
                break;
            default:
                dog["newoptions"].push(
                    option.charAt(0).toUpperCase()
                  + option.substr(1).toLowerCase()
                );
          };
        });
        dog["newoptions"].sort();
        dog["options"] = dog["newoptions"];


        doggieData.push(dog);
        });
      return doggieData;
    }


    allDogs.fillRandom = function(response) {

        var randomDog = [];

        var statusCode = response.data.petfinder.header.status.code.$t
        var value = response.data.petfinder.pet;

        var dog = {};

        dog["name"] = value.name.$t;
        dog["id"] = value.id.$t;
        dog["age"] = value.age.$t;
        if (value.age.$t == "Baby") { dog["age"] = "Puppy" }

        if (value.media.photos) {
        dog["photos"] = value.media.photos.photo;
        dog["profile"] = value.media.photos.photo[2].$t;
        }

        dog["options"] = [];

        switch(value.sex.$t){
            case "F":
                dog["sex"] = "Female";
                break;
            case "M":
                dog["sex"] = "Male";
                break;
        }

        switch(value.size.$t) {
            case "S":
                dog["size"] = "Small";
                break;
            case "M":
                dog["size"] = "Medium";
                break;
            case "L":
                dog["size"] = "Large";
                break;
            case "XL":
                dog["size"] = "Giant";
                break;
        }

        if (value.mix.$t == "yes") { dog["mix"] = value.mix.$t;}

        dog["email"] = value.contact.email.$t;
        dog["description"] = value.description.$t;
        dog["shelterId"] = value.shelterId.$t;
        dog["breed"] = value.breeds.breed.$t;
        dog["options"] = [];
        dog["newoptions"] = [];

        if (Array.isArray(value.options.option)) {
                angular.forEach(value.options.option, function(newValue) {
                  dog["options"].push(newValue.$t);
                });
            } else if (!Array.isArray(value.options.option) && value.options.option) {
            dog["options"].push(value.options.option.$t);
            }

        angular.forEach(dog["options"], function(option){
          switch(option) {
            case "hasShots":
                dog["newoptions"].push("Shots Up-to-Date")
                break;
            case "noCats":
                dog["newoptions"].push("Cannot live with Cats")
                break;
            case "noDogs":
                dog["newoptions"].push("Cannot live with Dogs")
                break;
            case "specialNeeds":
                dog["newoptions"].push("**Special Needs**");
                break;
            default:
                dog["newoptions"].push(
                    option.charAt(0).toUpperCase()
                  + option.substr(1).toLowerCase()
                );
          };
        });
        dog["newoptions"].sort();
        dog["options"] = dog["newoptions"];
        randomDog.push(dog);
        return randomDog;
    }

    return allDogs;
}]);
