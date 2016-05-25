DogApp.controller('SearchController', ['$scope', function ($scope) {
    $scope.location = "nowhere yet..";

    $scope.submit = function (formData) {
        $scope.alert = "";
         if(!$scope.searchForm.$valid) {
           $scope.alert = "Oops, not quite. Please enter a valid zipcode. ";
           $scope.zipcode = "";
       return;
         } else {
        $scope.location = formData;
        $scope.zipcode = null;
         }
    }
}]);
