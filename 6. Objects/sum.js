
// total price 
var products = [
    {name: 'laptop', price: 45000},
    {name: 'shirt', price: 500},
    {name: 'phone', price: 35000}
]

var totalPrice = 0;
for(var product of products){
    totalPrice = totalPrice + product.price;
}
console.log(totalPrice)

var cart = [
    {name: 'laptop', price: 45000, quantity: 1},
    {name: 'shirt', price: 500, quantity: 4},
    {name: 'phone', price: 35000, quantity: 2}
]

var cartTotal = 0;
for(var product of cart){
    var productTotal = product.price * product.quantity;
    cartTotal += productTotal;
}
console.log(cartTotal);