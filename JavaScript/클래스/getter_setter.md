# getter와 setter

get과 set을 이용하여 user.name을 조작할 수 있게 해보자.

<br>

```js
class User {
    constructor(name) {
        this.name = name
    }

    get name() {
        return this._name
    }

    set name(value) {
        if(value.length < 4) {
            console.log('이름이 너무 짧다.');
            return
        }
        this._name = value
    }
}

let user = new User('나라');
console.log(user.name)

user = new User('')
```

getter, settter 는 User.prototype에 정의됩니다.
