# Set

셋(Set)은 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션이다.

셋에는 키가 없는 값이 저장된다.

- new Set(iterable) : 셋을 만든다. 이터러블 객체를 전달받으면 그안의 값을 복사하여 셋에 넣어준다.(보통 배열을 전달받는다.)
- set.add(value) : 값을 추가하고 셋 자기 자신을 반환합니다.
- set.delete(value) : 값을 제거한다. 호출 시점에서 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환
- set.has(value) : 셋 안에 값이 존재하면 true, 아님 false를 반환
- set.clear() : 셋을 비운다.
- set.size : 셋에 몇 개의 값이 있는지 세준다.

<br>

셋 안에 동일한 값(value)가 있다면 set.add(value)를 많이 호출하더라도 반응은 없을 것이다.

셋을 사용했을때 안의 값이 중봅이 없는 경우가 바로 이러한 이유 때문이다.

<br>

예시를 보면서 이해하여보자

방문자 방명록을 만들것이고 한 방문자가 여러 번 방문하여도 방문자를 중복해서 기록하지 않겠다고했다.

한 방문자는 '단 한 번만 기록'되어야 한다.

이럴때 사용하면 좋은 자료구조가 바로 **셋**이다.

```js
let set = new Set();

let john = { name: 'John'};
let pete = { name: 'Pete'};
let mary = { name: 'Mary'};

// 어떤 고객은 여러번 방문이 가능하다.
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set에는 유일무이한 값만 저장된다.
console.log(set.size); // 3

for (let user of set) {
    console.log(user.name) // John, Pete, Mary 순으로 출력된다.
}
```

> 위 코드를 배열을 사용하여 방문자 정보를 저장한 후, 중복 값 여부는 arr.find로 확인이 가능하다.
>
> 하지만 arr.find는 배열 내 요소 전체를 뒤져서 중복 값을 찾기 때문에 셋보다 성능이 떨어진다.

