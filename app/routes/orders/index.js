import Ember from 'ember';

export default Ember.Route.extend({
    actions:{
        
        addToItemQuantity(lineItem, amount){
            lineItem.incrementProperty('quantity', amount);
        },

        createOrder(order){
            //const name = order.get('name');
            //alert(name + ' order saved!');

            this.get('store').saveOrder(order);
            this.transitionTo('orders.order', order);   //transitionTo: navigate to another route. Params: Target Route Name, optional model parameters.
        }
    },

    //this orders.index route is created and uses a new order record.
    model(){
        const store = this.get('store');
        return store.newOrder();
    },

    store: Ember.inject.service()

});
