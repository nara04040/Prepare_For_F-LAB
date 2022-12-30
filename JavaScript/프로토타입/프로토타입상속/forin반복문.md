# for...in 반복문

for..in은 상속 프로퍼티도 순회대상에 포함시킵니다.

<br>

```js
let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

console.log(Object.keys(rabbit)); // jumps

// for.. in 객체 자신의 키와 상속 프로퍼티의 키 모두를 순회한다.
for(let prop in rabbit) {console.log(prop)} // jumps, eats
```

<br>

obj.hasOwnProperty(key)를 사용하면 상속 프로퍼티를 순회 대상에서 제외할 수 있다. 

이 내장 메서드는 key에 대응하는 프로퍼티가 상속 프로퍼티가 아니고 obj에 직접 구현되어있는 프로퍼티일때만 true를 반환한다.

obj.hasOwnProperty(key)를 응용한다면 상속 프로퍼티를 걸러내고 상속 프로퍼티만을 대상으로 다른 많은 일을 할 수 있다.

```js
let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

for(let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if(isOwn) {
        console.log(`객체 자신의 프로퍼티: ${prop}`); // 객체 자신의 프로퍼티 : jumps
    } else {
        console.log(`상속 프로퍼티: ${prop}`) // 상속 프로퍼티: eats
    }
}
```

> 키-값을 순회하는 메서드 대부분은 상속 프로퍼티를 제외하고 동작한다.
>
> 