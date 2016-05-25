describe('SearchController', function() {
  beforeEach(module('DogApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('has a method to hold the users location input', function () {
    var $scope = {searchForm:{$valid:true}};
    var controller = $controller('SearchController', { $scope: $scope });

    $scope.submit(55082);
    expect($scope.location).toEqual(55082);
  });

  it('fails if the input is not a valid zip', function () {
    var $scope = {searchForm:{$valid:false}};
    var controller = $controller('SearchController', { $scope: $scope });

    $scope.submit("words");
    expect( $scope.alert).toEqual("Oops, not quite. Please enter a valid zipcode. ");
    expect( $scope.location).not.toEqual("words");
  });
 });
