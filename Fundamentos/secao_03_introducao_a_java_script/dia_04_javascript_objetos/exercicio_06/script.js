let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};


function customerInfo(order) {
    let deliveryPerson = order.order.delivery.deliveryPerson;
    let name = order.name;
    let telefone = order.phoneNumber;
    let endereco = order.address.street;
    let numero = order.address.number;
    let apartment = order.address.apartment;

    console.log('Olá ' + deliveryPerson + ', entrega para: ' +  name + ', Telefone: ' + telefone +', R. ' +  endereco + ', N°: ' + numero + ', AP: ' + apartment);
}

order.order.delivery.deliveryPerson = 'Luis Silva';
order.order.pizza.marguerita.price = 25;
order.order.pizza.pepperoni.price = 20;
order.order.drinks.coke.price = 5;

function orderModifier(order) {
    let deliveryPerson = order.order.delivery.deliveryPerson;
    let precoMarguerita = order.order.pizza.marguerita.price;
    let precoPepperoni = order.order.pizza.pepperoni.price;
    let precodrink = order.order.drinks.coke.price;

    console.log('Olá ' + deliveryPerson + ', o valor total de seu pedido de margureita, pepperoni e coca-cola é R$' + (precoMarguerita + precoPepperoni + precodrink) + ',00.');
}

orderModifier(order);