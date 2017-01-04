import Ember from 'ember';

export default Ember.Object.extend({    
    //calculate the total price
    //the mapBy macro creates a new array containing mapped properties...
    itemPrices: Ember.computed.mapBy('items', 'price'),  //this is an array of lineItem prices. mapBy: (nameOfCollection, elementPropertyToMap);
    price: Ember.computed.sum('itemPrices') //sum macro adds together an array of numbers
});