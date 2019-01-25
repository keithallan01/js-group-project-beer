const PubSub = require('../helpers/pub_sub.js');
const BeerStats = require('./beer_stats.js');
// const RequestHelper = require('../helpers/request_helper.js')

const RandomBeerGenerator = function () {
  this.beerArray = null;
};

RandomBeerGenerator.prototype.bindEvents = function(){
  PubSub.subscribe('Beers:data-loaded', event => {
    this.beerArray = event.detail;
    const payload = this.getRandomBeer();

    PubSub.publish('RandomBeerGenerator: Random-Beer-Generated', payload)
  })
};

RandomBeerGenerator.prototype.getRandomBeer = function (beerID) {
  const randomBeer = this.beerArray[Math.floor(Math.random() * this.beerArray.length)];
  return randomBeer
};


module.exports = RandomBeerGenerator;
