import Ember from 'ember';

export default Ember.Object.extend({    

    //computed properties: function-calculated, cached properties.

    //calculate price...
    price: Ember.computed('quantity', 'unitPrice', function(){
        return parseInt(this.get('quantity', 10)) * this.get('unitPrice');
    }),

    title: Ember.computed.alias('product.title'),   //this shortens the view markup so we can do this... "lineItem.title", instead of this... lineItem.product.title
    
    unitPrice: Ember.computed.alias('product.price')

    //this is equivalent...
    // title: Ember.computed('product.title', function(){
    //     return this.get('product.title');
    // })

});