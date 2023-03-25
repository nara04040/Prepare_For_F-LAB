interface Product {
  id: number;
  name: string;
  price: number;
}

class ShoppingCart<T extends Product> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  removeItemById(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

class Book implements Product {
  constructor(public id: number, public name: string, public price: number, public author: string) {}
}

class Clothing implements Product {
  constructor(public id: number, public name: string, public price: number, public size: string) {}
}

const book1 = new Book(1, "코어자바스크립트", 10000, "정재남");
const shirt1 = new Clothing(2, "줄무니", 12000, "L");
const cart = new ShoppingCart<Book>();

cart.addItem(book1);
// cart.addItem(shirt1);

console.log(cart.getTotalPrice());
