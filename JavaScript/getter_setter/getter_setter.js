class User {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  get age() {
    // getter, User.age를 실행할 때 실행되는 코드
    this._age = this._age + 1;
    return this._age;
  }
  set age(value) {
    // setter, User.age = value를 실행할 때 실행되는 코드
    if (value < 0) {
      throw Error("age can not be negative");
    }
    this._age = value;
  }

  get firstname() {
    this._firstname = "jin";
    return this._firstname;
  }
  set firstname(name) {
    if (name.length < 0) {
      throw Error("나이x");
    }
  }
}

const user1 = new User("hannara", "Yu", 26);
console.log(user1);
console.log(user1.age);
console.log((user1.age = 1));
console.log(user1.firstname);
