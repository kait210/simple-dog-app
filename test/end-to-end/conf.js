exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [ 'dogs.spec.js', 'random-dog.spec.js']
}
