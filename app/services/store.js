import Ember from 'ember';

//new models must be imported into the store for them to be available for use...
import LineItem from 'woodland/models/line-item'; //app name: woodland
import Order from 'woodland/models/order';
import Product from 'woodland/models/product';


const products = [
    Product.create({ title: 'Tent', price: 10, description: 'This is a tent', imageUrl: '#'}),
    Product.create({ title: 'Sleeping Bag', price: 9, description: 'This is a sleeping bag', imageUrl: '#'}),
    Product.create({ title: 'Flash Light', price: 22, description: 'This is a light', imageUrl: '#'}),
    Product.create({ title: 'First Aid Kit', price: 5, description: 'This is a first aid kit son', imageUrl: '#'})
];

const orders = [
    Order.create({ id: '1234', name: 'Blaise Blobfish', items:[
        LineItem.create({product: products[0], quantity:1}),
        LineItem.create({product: products[1], quantity:1}),
        LineItem.create({product: products[2], quantity:0}),
        LineItem.create({product: products[3], quantity:0}),
    ]}),
    Order.create({ id: '4567', name: 'Joe Geringer', items:[
        LineItem.create({product: products[0], quantity:2}),
        LineItem.create({product: products[1], quantity:3}),
        LineItem.create({product: products[2], quantity:4}),
        LineItem.create({product: products[3], quantity:5}),
    ]})
];


export default Ember.Service.extend({

    getOrderById(id){
        return orders.findBy('id', id);

        //const orders = this.getOrders();
        //return orders.findBy('id', id);
    },

    //move data from routes (order/orders), to here...
    getOrders(){
        return orders;
        
        // return [
        //     { id: '1', name: 'Joe Geringer' },
        //     { id: '2', name: 'Theresa Geringer' },
        //     { id: '3', name: 'Hailey Geringer' }
        // ];
    },
    
    getProducts(){
        return products; //this makes the products array at the top public.
    },

    //to manage a new order's information, we need an empty order record to work with...
    newOrder(){
        return Order.create({
            items: products.map((product) => {  //for each product in the products array, create a new LineItem per product
                return LineItem.create({
                    product: product
                });
            })
        });
    },

    saveOrder(order){
        order.set('id', 9999);  //pretending we are talking to a server and setting an id.
        orders.pushObject(order);   //add it to the orders array, and triggers value-changed events.
    }

});
