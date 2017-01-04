import Ember from 'ember';

//NOTE: Components MUST have at least one hyphen in their name (item-percentage)! This conforms to their spec.

//Components have their own properties, functions and behaviors

export default Ember.Component.extend({

    actions:{
        toggleDetails(){
            this.toggleProperty('showDetails');
        }
    },

    isImportant: Ember.computed.gte('percentage', 50),

    percentage: Ember.computed('itemPrice', 'orderPrice', function(){
        return this.get('itemPrice') / this.get('orderPrice') * 100;
    })

});
