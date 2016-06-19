describe('Dog Search', function() {

  beforeEach(function() {
    browser.get('http://localhost:8000/');
    element.all( by.css( 'a[href="/search"]') ).get(0).click();
  });

  it('has a title', function() {

    expect(browser.getTitle()).toEqual('Find your Fido');
   });

  it('can search by location', function() {

    var firstDog = element( by.repeater('dog in doggieData').row(0).column('name'));
    expect(firstDog.isPresent()).toBe(false);

    element(by.model('location')).sendKeys("55082");
    expect(firstDog.isPresent()).toBe(true);
    });

  it('can filter search by age, size, and sex', function() {

    var firstDog = element( by.repeater('dog in doggieData').row(0).column('name'));

    expect(firstDog.isPresent()).toBe(false);

    element(by.model('age')).$('[value="Adult"]').click();
    element(by.model('size')).$('[value="Medium"]').click();
    element(by.model('sex')).$('[value="Female"]').click();
    element(by.model('location')).sendKeys("55082");

    expect(firstDog.isPresent()).toBe(true);
  });

  it('can extend search results', function() {

    element(by.model('age')).$('[value="Adult"]').click();
    element(by.model('size')).$('[value="Medium"]').click();
    element(by.model('sex')).$('[value="Female"]').click();
    element(by.model('location')).sendKeys("55082");

    var firstCount;
    var count = element.all(by.repeater('dog in doggieData')).count()

    firstCount = count;

    element(by.css('a[ng-click="fetch()"]')).click();
    expect(element.all(by.repeater('dog in doggieData')).count()).toBeGreaterThan(firstCount);
  });


  it('has a button to email contact', function() {

    var dogEmail = element.all( by.css('.email') ).get(0);

    expect(dogEmail.isPresent()).toBe(false);

    element(by.model('age')).$('[value="Adult"]').click();
    element(by.model('size')).$('[value="Medium"]').click();
    element(by.model('sex')).$('[value="Female"]').click();
    element(by.model('location')).sendKeys("55082");

    expect(dogEmail.getAttribute('href')).toMatch(/mailto:\w+?.\w+@\w+.\w+?.\w+/);
  });

  it('has a button to dog-specific PF adoption page', function() {

    var adopt = element.all( by.css('.adopt') ).get(0);

    expect(adopt.isPresent()).toBe(false);

    element(by.model('age')).$('[value="Adult"]').click();
    element(by.model('size')).$('[value="Medium"]').click();
    element(by.model('sex')).$('[value="Female"]').click();
    element(by.model('location')).sendKeys("55082");

    expect(adopt.getAttribute('href')).toMatch(/http:\/\/petfinder.com\/petdetail/);
  });

    it('has a button to save dog for later', function() {

    element(by.model('age')).$('[value="Adult"]').click();
    element(by.model('size')).$('[value="Medium"]').click();
    element(by.model('sex')).$('[value="Female"]').click();
    element(by.model('location')).sendKeys("55082");

    var savedDog = element( by.repeater('dog in doggies').row(0).column('name'));
    expect(savedDog.isPresent()).toBe(false);

    element.all( by.css('.save') ).get(0).click();
    expect(savedDog.isPresent()).toBe(true);

    // Persists on browser refresh
    browser.get('http://localhost:8000/');
    element.all( by.css( 'a[href="/search"]') ).get(0).click();
    expect(savedDog.isPresent()).toBe(true);
    element.all( by.css('.remove') ).get(0).click();
  });

  it('has a button to remove dog from saved', function() {

    element(by.model('age')).$('[value="Adult"]').click();
    element(by.model('size')).$('[value="Medium"]').click();
    element(by.model('sex')).$('[value="Female"]').click();
    element(by.model('location')).sendKeys("51106");

    var savedDog = element( by.repeater('dog in doggies').row(0).column('name'));
    element.all( by.css('.save') ).get(0).click();
    expect(savedDog.isPresent()).toBe(true);

    element.all( by.css('.remove') ).get(0).click();
    expect(savedDog.isPresent()).toBe(false);
  });

  it('displays each dogs characteristics', function() {

    element(by.model('age')).$('[value="Adult"]').click();
    element(by.model('size')).$('[value="Medium"]').click();
    element(by.model('sex')).$('[value="Female"]').click();
    element(by.model('location')).sendKeys("51106");

    var dogInfo = element( by.repeater("info in dog['options']").row(0));
    if (dogInfo.isPresent()) { expect(dogInfo.getText()).toMatch(/\w+ ?\w+-?\w+-?\w+/) }

    var firstDog = element.all( by.css('img.profile') ).get(0);
    expect(firstDog.getAttribute('src')).toMatch(/.+\.jpg/)
  });
});
