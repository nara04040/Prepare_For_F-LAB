var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.items = [];
    }
    ShoppingCart.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ShoppingCart.prototype.removeItemById = function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
    };
    ShoppingCart.prototype.getTotalPrice = function () {
        return this.items.reduce(function (total, item) { return total + item.price; }, 0);
    };
    return ShoppingCart;
}());
var Book = /** @class */ (function () {
    function Book(id, name, price, author) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.author = author;
    }
    return Book;
}());
var Clothing = /** @class */ (function () {
    function Clothing(id, name, price, size) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.size = size;
    }
    return Clothing;
}());
var book1 = new Book(1, "코어자바스크립트", 10000, "정재남");
var shirt1 = new Clothing(2, "줄무니", 12000, "L");
var cart = new ShoppingCart();
cart.addItem(book1);
// cart.addItem(shirt1);
console.log(cart.getTotalPrice());
