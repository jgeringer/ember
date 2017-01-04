import Ember from 'ember';

export default Ember.Route.extend({
    
    model(){
        const store = this.get('store');
        return store.getOrders();

        //move this data to the /services/store.js...
        // return [
        //     { id: '1', name: 'Joe Geringer' },
        //     { id: '2', name: 'Theresa Geringer' },
        //     { id: '3', name: 'Hailey Geringer' }
        // ];
    },

    store: Ember.inject.service()

});
