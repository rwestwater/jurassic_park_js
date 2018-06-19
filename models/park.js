const Park = function (name, ticketPrice, collectionOfDinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = [];
}

Park.prototype.addDinosaurToCollection = function(dinosaur) {
  this.collectionOfDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaurFromCollection = function(dinosaur) {
  this.collectionOfDinosaurs.shift(dinosaur);
};

module.exports = Park;
