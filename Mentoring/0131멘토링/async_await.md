# async await

Generator 보다 간단하고 가독성 좋게 비동기 처리를 **동기 처리처럼** 구현할 수 있는 async / await가 도입

async/await은 프로미스를 기반으로 동작한다.

async/await를 사용한다면 프로미스의 비동기 처리결과 후속처리를 할 필요가 없다.

> 프로미스의 비동기 처리결과 후속처리
>
> then, catch, finally 후속처리 메서드에 콜백함수를 전달하는 과정

프로미스의 후속 처리 메서드 없이 마치 동기처럼 프로미스가 처리 결과를 반환하도록 구현가능


<br>

```js
const fetch = require('node-fetch');

async = function fetchTodo() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    const response = await fetch(url);
    const todo = await response.json();
    console.log(todo)
}

fetchTodo()
```


## await 문법

```js
let value = await promise;
```

자바스크립트는 await키워드를 만나면 프로미스가 처리될 때까지 기다립니다. 결과는 그 이후 반환됩니다.

```js
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('완료!'), 1000)
    });

    let result = await promise; // 프로미스가 이행될 때까지 기다립니다.

    console.log(result) // '완료!'
}

f()
```

await는 promise.then보다 더 세련되게 프라미스의 result 값을 얻을 수 있도록 해주는 문법입니다.

promise.then보다 가독성이 좋고 쓰기 쉬운 장점이 있습니다.

await은 'thenable'객체를 받습니다.

```js
class Thenable {
    constructor(num){
        this.num = num;
    }
    then(resolve, reject){
        alert(resolve);
        setTimeout(()=> resolve(this.num * 2), 1000)
    }
};

async function f () {
    let result = await new Thenalbe(1);
    alert(result)
}

f();
```

await은 .then이 구현되어 있고, 프라미스가 아닌 객체를 받으면, 내장함수 resolve와 reject를 인수로 제공하는 메서드인 .then을 호출합니다.

이후 await는 resolve와 reject중 하나가 호출되길 기다렸다 호출 결과를 가지고 다음 일을 진행합니다.

메서드 이름 앞에 async를 추가한다면 async클래스 메서드를 선언을 할 수도 있습니다.

```js
class Waiter {
    async wait() {
        return await Promise.resolve(1);
    }
}

new Waiter()
    .wait()
    .then(alert); // 1
```

