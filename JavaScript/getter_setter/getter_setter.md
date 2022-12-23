# getter setter

javascript 의 객체의 프로퍼티는 두 종류다.

1. 데이터 프로퍼티(data property)
2. 접근자 프로퍼티(accessor property) : 본질은 함수, 값을 획득(get)하고 설정(set)하는 역할

### getter, setter

접근자 프로퍼티는 ‘getter, setter’로 표현이 된다.

객체 리터럴 안에서 getter, setter메서드는 get, set으로 나타낼수가 있다.

```jsx
	let obj = {
		get propName(){
        // getter, obj.propName을 실행할 때 실행되는 코드
	},
        set propName(value){
        // setter, obj.propNmae = value를 실행할 때 실행되는 코드
        }
    };
```

getter 메서드는 obj.propName을 사용해 프로퍼티를 읽으려고 할 때 실행되고, setter 메서드는 obj.propName = value로 프로퍼티에 값을 할당하려 할 때 실행된다.

프로퍼티 name과 surname이 있는 객체 user를 만든다.

```js
let user = {
    name : "John",
    surname : "Smith"
}
```

이 객체에 fullName이라는 프로퍼티를 추가해서 fullName이 'John Smith'가 되도록 해보자.

이때 fullName이 'John Smith'가 되도록 할려면 접근자 프로퍼티를 구현하면 된다.

```js
let user = {
    name : "John",
    surname : "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`
    }
}

console.log(user.fullNmae); // John Smith
```

**밖에서 접근자 프로퍼티를 일반 프로퍼티처럼 사용할 수 있다.**

접근자 프로퍼티는 이 아이디어에서 출발했다.

**접근자 프로퍼티**를 사용하면 함수처럼 호출하지않고, 일반 프로퍼티에서 값에 접근하는 것처럼 평범하게 user.fullName을 사용해 프로퍼티 값을 얻을 수 있다.

나머지는 getter메서드가 뒷단에서 처리해준다.

위 코드에서 fullName은 getter메서드만 가지고 있기에 user.fullName=을 사용하여 **할당**하려고한다면 에러가 발생한다.

```js
let user = {
    get fullName() {
        return `...`;
    }
};

user.fullName = "Test"; // Error (프로퍼티에 getter 메서드만 있어서 에러가 발생한다.)
```

user.fullName에 setter 메서드를 추가하여 에러가 발생하지 않도록 고쳐보자.

```js
let user = {
    name : "John",
    surname: "Smith",

    get fullName() {
        return `${this.name} ${this.surname}`;
    },
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};

// 주어진 값을 사용해 set fullName이 실행됩니다.
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper
```

이런 getter, setter메서드를 구현하면 객체에 fullName이라는 '가상'의 프로퍼티가 생긴다.

가상의 프로퍼티는 읽고 쓸 순 있다, 하지만 실제로는 존재하지 않는다.

<br>
<br>
<br>

## 접근자 프로퍼티 설명자

데이터 프로퍼티 설명자와 접근자 프로퍼티의 설명자는 다르다.

접근자 프로퍼티에는 설명자 value와 writable이 없는 대신 get과 set이라는 함수가 있다.

따라서 접근자 프로퍼티는 다음과 같은 설명자를 가진다.

- get : 인수가 없는 함수로, 프로퍼티를 읽을 때 동작함
- set : 인수가 하나인 함수로, 프로퍼티에 값을 쓸 때 호출됨
- enumerable : 데이터 프로퍼티와 동일함
- configurable : 데이터 프로퍼티와 동일함

defineProperty에 설명자 get , set을 전달하면 fullName을 위한 접근자를 만들 수 있다.


```js
let user = {
    name : 'John',
    surname : 'Smith'
};

Object.defineProperty(user, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },
    set(value) {
        [this.name, this.surname] = value.split(" ")
    }
});

alert(user.fullName); // John Smith
for(let key in user) alert(key) // name, surname
```

프로퍼티는 접근자 프로퍼티(get/set 메서드를 가짐)나 데이터 프로퍼티(value를 가진다.) 중 한 종류에만 속하고 둘 다에 속할 수 없다는 점을 항상 유의해라.

```js
Object.defineProperty({}, 'prop', {
    get() {
        return 1
    },
    value : 2
});
```


## getter , setter 똑똑하게 활용하게

getter와 setter를 "실제" 프로퍼티 값을 감싸는 wrapper처럼 사용하면 프로퍼티 값을 원하는대로 통제가 가능하다.

예제 코드

```js
let user = {
    get name() {
        return this._name;
    },
    set name(value) {
        if(value.length < 4) {
            alert("입력값이 너무 짧습니다. 네 글자 이상으로 구성된 이름을 입력하세요");
            return;
        }
        this._name = value
    }
};

user.name = "Pete";
alert(user.name); // Pete

user.name = ""; // 너무 짧은 이름을 할당하려 한다.
```

user의 이름은 _name에 저장되고, 프로퍼티에 접근하는 것은 getter setter를 통해 이뤄진다.

외부 코드에서는 user._name을 사용하여 바로 접근이 가능하다.

그러나 밑줄 "_"로 시작하는 프로퍼티는 객체 내부에서만 활용되고, 외부에서는 건드리지 않는 것이 관습이다.

<br>

## 호환성을 위해 사용하기

접근자 프로퍼티는 언제 어느 때나 getter와 setter를 사용해 데이터 프로퍼티의 행동과 값을 원하는 대로 조정할 수 있게 해준다는 점에서 유용하다.

데이터 프로퍼티 name과 age를 사용하여 사용자를 나타내는 객체를 구현한다고 가정해보자.

<br>

```js
function User(name, age) {
    this.name = name;
    this.age = age;
}

let john = new User("John", 25);

alert(john.age) // 25
```

<br>

요구사항이 바뀌어서 age대신 birthday를 저장한다고 해보자. 

<br>

```js
function User(name, age) {
    this.name = name;
    this.birthday = birthday;
}

let john = new User("John", new Date(1992, 6, 1));
```

이렇게 수정한다면 기존 코드중 프로퍼티 age를 사용하고 있는 코드도 수정해야한다.

age가 사용되는 부분을 찾아서 수정하는 것도 가능하지만 시간이 오래 걸린다.

기존 코드는 두고 age를 위한 getter를 추가하여 문제를 해보자.


```js
function User(name, age) {
    this.name = name;
    this.birthday = birthday;
}

    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear()
        }
    });

let john = new User("John", new Date(1992, 6, 1));

alert(john.birthday);
alert(john.age);
```