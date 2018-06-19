const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function () {
    park = new Park("Jurassic Park", 15, []);
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50)
  })

  it('should have a name', function(){
    assert.strictEqual(park.name, "Jurassic Park");
  });


  it('should have a ticket price');

  it('should have a collection of dinosaurs');

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
