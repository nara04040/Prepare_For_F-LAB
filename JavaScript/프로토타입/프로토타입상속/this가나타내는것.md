# 프로토타입에서의 this

```js
let user = {
    name : 'Jin',
    surname: 'Yu',

    set fullName(value){
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__ : user,
    isAdmin: true
};

console.log(admin.fullName); // "Jin Yu"

adimn.fullName = "Yu Hannara";

console.log(admin.fullName); // Yu Hannara
console.log(user.fullName); // Jin Yu

```

위 코드에서 set fullName(value) 본문에서의 this는 무슨 값이지 라는 질문이 나온다.

this.name, this.surname에 값을 쓴다면 user에 저장되는 것인가, admin에 저장되는 것인가라는 의문도 생긴다.

여기에 대한 답은 **this는 프로토타입의 영향을 받지 않는다.**

<br>

***메서드를 객체에서 호출하든 프로토타입에서 호출하든 this는 언제나 . 앞의 객체일 뿐이다.***

<br>

admin.fullName으로 setter함수를 호출할 때, this는 user가 아닌 admin이 된다.

예시코드를 보자

<br>

```js
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`동물이 걸어갑니다.`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
    name: "하얀 토끼",
    __proto__: animal
};

rabbit.sleep();

console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // undefined
```