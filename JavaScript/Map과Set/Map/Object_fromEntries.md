# Object.fromEntries

Object.entries(obj)는 평범한 객체를 맵으로 만드는 방법을 알아보았다.


맵을 객체로 바꾸는 방법 : Object.fromEntries

이 메서드는 요소가 [키, 값] 쌍인 배열을 객체로 바꿔준다.

```js
let prices = Object.fromEntries ([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

// now prices = { banana: 1, orange: 2, meat: 4}

console.log(prices.orange); // 2
```

```js
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries());  // 맵을 일반 객체로 변환

// 이제 맵은 객체로 바뀌었다.
// obj = {banana: 1, orange: 2, meat: 4}

console.log(obj.orange()) // 2
```

map.entries()를 호출하면 맵의 [키, 값]을 요소로 가지는 이터러브을 반환한다.

Object.fromEntries를 사용하기 위해 알맞은 형태이다.

```js
let obj = Object.fromEntries(map); // .entries()를 생략
```

