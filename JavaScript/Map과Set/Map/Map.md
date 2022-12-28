# Map
맵은 배열에서 사용하는 메서드인 map일수도 있고, 객체에서 사용하는 Map일 수도 있다.

지금 우리가 알아볼 맵(Map)은 키가 있는 데이터를 저장한다 라는 점에서 객체와 유사하다. 하지만 맵은 키에 다양한 자료형을 허용한다는 점에서 차이가 있을 수 있다.

맵에 주요 메서드와 프로퍼티를 알아보자.

- new Map() : 맵을 만듭니다.
- map.set(key, value) : key를 이용하여 value를 저장합니다.
- map.get(key) : key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환한다.
- map.has(key) : key가 존재하면 true, 아니라면 false를 반환한다.
- map.delete(key) : key에 해당하는 값을 삭제한다.
- map.clear() : 맵 안의 모든 요소를 제거한다.
- map.size : 요소의 개수를 반환한다.

<br>

예시 코드를 보면서 이해하여보자!

<br>

```js
let map = newe Map();

map.set('1', 'str1'); // 문자형 키
map.set(1, 'num1'); // 숫자형 키
map.set(true, 'bool1'); // 불린형 키

// 객체는 키를 문자형으로 변환한다.
// 맵은 키의 타입을 변환시키지 않고 그대로 유지한다.

console.log(map.get(1)); // 'num1'
console.log(map.get('1')) // 'str1'
```

여기서 눈여겨 볼 점은 map은 객체와 달리 키를 문자형으로 변환하지 않는다. 그리고 키에는 자료형 제약이 없다

<br>

> map[key] 를 사용하는 것은 Map을 올바르게 사용하는 방법이 아니다.
>
> map[key] = 2로 설정하는 것 같이 map[key] 를 사용할 수 있긴 하다. 하지만 이 방법은 map을 일반 객체처럼 취급하게 된다.
> 즉 제약이 생긴다는 말이다.
>
> 따라서 map을 사용할 땐 전용 메서드인 get, set을 사용하자.

<br>

```js
// 예시코드

let john = {name : "John"};

// 고객의 가게 방문 횟수를 세어본다고 가정해 보자.
let visitsCountMap = new Map();

// john을 맵의 키로 사용한다.
visitsCountMap.set(john, 123);

console.log(visitsCountMap.get(john)); // 123 (type: number)
```

이처럼 객체를 키로 사용할 수 있다는 점은 Map을 사용하는 가장 중요한 기능 중 하나이다.

객체에는 문자열 키를 사용할 수 있다. 하지만 객체 키는 사용할 수 없다.

객체형 키를 객체에 사용해보자.

<br>

```js
let john = {name: 'John'};

let visitsCountObj = {}; // 객체를 하나 만든다.

visitsCountObj[john] = 123; // 객체(john)을 키로 해서 객체에 값 123을 저장한다.

// 원하는 값인 123을 얻을려면 키가 들어갈 자리에 'object Object'를 써야한다.
console.log(visitsCountObj["[object Object]"]); // 123

```

<br>

> 맵이 키를 비교하는 방식
>
> 맵은 SameValueZero라 불리는 알고리즘을 사용하여 등가 여부를 확인한다.
>
> 이것은 일치연산자인 === 와 거의 유사하지만 NaN, NaN을 같다고 취급하는 것에서 일치 연산자와 차이가 있따.
>
> Map에서는 NaN또한 키로 사용할 수 있다.

<br>

> 체이닝
>
> map.set을 호출할 때마다 맵 자신이 반환된다. 
>
> 이를 사용하면 map.set을 '체이닝'할 수 있다.
> ```js
>map.set('1','str1').set(1,'num1').set(true, 'bool1');
>```