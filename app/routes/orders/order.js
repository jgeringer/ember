import Ember from 'ember';

export default Ember.Route.extend({
    
    model(params){
        const id = params.order_id;
        const store = this.get('store');
        return store.getOrderById(id);

        //was this... (new home: services/store.js)
        // return [
        //     { id: '1', name: 'Joe Geringer' },
        //     { id: '2', name: 'Theresa Geringer' },
        //     { id: '3', name: 'Hailey Geringer' }
        // ].findBy('id', params.order_id);
    },
    
    store: Ember.inject.service() //...service('store'); //we can leave of the service name because the property name is the same;
    //^local name of service        ^name of the service to inject

});
