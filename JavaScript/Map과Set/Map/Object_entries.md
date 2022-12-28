# Object.entries : 객체를 맵으로 바꾸기

각 요소가 키-값인 배열이나 이터러블 객체를 초기화 용도로 맵에 전달해 새로운 맵을 만들 수 있다.

예제코드를 보자.

<br>

```js
// 각 요소가 [키, 값] 쌍인 배열
let map = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);

console.log(map.get('1')); // str1
```

이렇게 평범한 객체를 **맵**을 만들고 싶다면 내장 메서드인 Object.entries(obj)를 활용해야 한다.

이 메서드는 객체의 키-값 쌍을 요소([key, value])로 가지는 배열을 반환한다.

```js
let obj = {
    name: "John",
    age: 30
};

let map = new Map(Object.entries(obj));

console.log(map.get('name')); //John
```

<br>

Object.entries를 사용하여 객체인 obj를 배열상태 [["name","John"], ["age", 30]]으로 바꾸고 배열을 이용하여 새로운 맵을 만들었다.


## 정리

평범한 객체를 맵으로 바꾸기

평범한 객체 -> Object.entries(obj) -> Map사용하여 Map으로 바꿈