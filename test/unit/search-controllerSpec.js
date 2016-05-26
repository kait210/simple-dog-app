describe('SearchController', function() {
  beforeEach(module('DogApp'));

  var ctrl, scope;

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('SearchController', {
        $scope: scope
    });
  }));

  it('stores a zipcode', function () {
    expect(scope.zipcode).toBeDefined();
    scope.searchForm = {$valid:true};
    scope.submit("55082");
    expect(scope.alert).not.toEqual("Oops, not quite. Please enter a valid zipcode. ");
  });

  it('fails if the input is not a valid zip', function () {
    scope.searchForm = {$valid:false};
    scope.submit("334");
    expect(scope.alert).toEqual("Oops, not quite. Please enter a valid zipcode. ");
  });

  xit('gets json data from the API', function () {
    expect(fetch()).toChange(scope.alert)
  });
});
