describe('Dog Search', function() {

  beforeEach(function() {
    browser.get('http://localhost:8000/');
    element.all( by.css( 'a[href="/random"]') ).get(0).click();
  });

  it('has a title', function() {

    expect(browser.getTitle()).toEqual('Find your Fido');
   });

  it('can search by location', function() {

    var firstDog = element( by.repeater('dog in randomDog').row(0).column('name'));
    expect(firstDog.isPresent()).toBe(false);

    element(by.css('[ng-click="getRandom()"]')).click();
    expect(firstDog.isPresent()).toBe(true);
    });

  it('has a button to email contact', function() {

    var dogEmail = element.all( by.css('.email') ).get(0);

    expect(dogEmail.isPresent()).toBe(false);

    element(by.css('[ng-click="getRandom()"]')).click();

    expect(dogEmail.getAttribute('href')).toMatch(/mailto:[A-z]+?.[A-z]+@[A-z]+.[A-z]+?.[A-z]+/);
  });

  it('has a button to dog-specific PF adoption page', function() {

    var adopt = element.all( by.css('.adopt') ).get(0);

    expect(adopt.isPresent()).toBe(false);

    element(by.css('[ng-click="getRandom()"]')).click();

    expect(adopt.getAttribute('href')).toMatch(/http:\/\/petfinder.com\/petdetail/);
  });

    it('has a button to save dog for later', function() {

    element(by.css('[ng-click="getRandom()"]')).click();

    var savedDog = element( by.repeater('dog in doggies').row(0).column('name'));
    expect(savedDog.isPresent()).toBe(false);

    element.all( by.css('.save') ).get(0).click();
    expect(savedDog.isPresent()).toBe(true);

    // Persists on browser refresh
    browser.get('http://localhost:8000/');
    element.all( by.css( 'a[href="/random"]') ).get(0).click();
    expect(savedDog.isPresent()).toBe(true);
    element.all( by.css('.remove') ).get(0).click();
  });

  it('has a button to remove dog from saved', function() {

    var click = element(by.css('[ng-click="getRandom()"]')).click();

    var savedDog = element( by.repeater('dog in doggies').row(0).column('name'));
    browser.wait(click, 1000);
    element.all( by.css('.save') ).get(0).click();
    expect(savedDog.isPresent()).toBe(true);

    element.all( by.css('.remove') ).get(0).click();
    expect(savedDog.isPresent()).toBe(false);
  });

  it('displays each dogs characteristics', function() {

    element(by.css('[ng-click="getRandom()"]')).click();

    var dogInfo = element( by.repeater("info in dog['options']").row(0));
    if (dogInfo.isPresent()) { expect(dogInfo.getText()).toMatch(/\w+ ?\w+-?\w+-?\w+/) }

    var firstDog = element.all( by.css('img.profile') ).get(0);
    expect(firstDog.getAttribute('src')).toMatch(/.+\.jpg/)
  });
});
