# 맵의 요소에 반복작업 하기

- map.keys() : 각 요소의 키를 모은 반복 가능한 (iterable,이터러블)객체를 반환한다.
- map.values() : 각 요소의 값을 모은 이터러블 객체를 반환한다.
- map.entries() : 요소의 [키, 값]을 한 쌍으로 하는 이터러블 객체를 반환한다. 이 이터러블 객체는 for...of 반복문의 기초로 쓰인다.

예제코드를 보면서 이해하여보자.

```js
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
])

// 기본적으로 for.. of 반복문을 사용한다.

// 키(vegetable)을 대상으로 순횐한다.
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
}

// 값(amount)를 대상으로 순회한다.
for (let amount of recipeMap.value()) {
    console.log(amount); // 500, 350, 50
}

// [키, 값] 쌍을 대상으로 순회한다.
for (let entry of recipeMap) { // recipeMap.entries()와 동일
    console.log(entry); // cucumber, 500...
}
```

> 맵은 삽입 순서를 기억한다.
>
> 맵은 값이 삽인도니 순서대로 순회를 실시합니다. 객체가 프로퍼티 순서를 기억하지 못하는 것과 다르다.

<br>

맵은 배열과 유사하게 내장 메서드 forEach도 지원한다.

예제코드를 보자

<br>

```js
// 각 (키, 값) 쌍을 대상으로 함수를 실행
recipeMap.forEach( (value, key, map) => {
    console.log(`${key} : ${value}`); // cucumber : 500 ...
})

```