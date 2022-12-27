# undefined

자바스크립트에서 '없음'을 나타내는 값 중 하나인 undefined이다.

사용자가 명시적으로 지정할 수 있지만, 값이 존재하지 않을 때 자바스크립트 엔진이 자동으로 부여하는 경우도 있습니다.

<br>

엔진이 자동으로 부여하는 경우

1. 값을 대입하지 않는 변수, 데이터 영역의 메모리 주소를 지정하지 않는 식별자에 접근할 때.
2. 객체 내부의 존재하지 않는 프로퍼티에 접근하려고 할 때.
3. return 문이 없거나 호출되지 않는 함수의 실행 결과.

```js
var a;
console.log(a); // undefined. 값을 대입하지 않은 변수에 접근.

var obj = { a : 1};
console.log(obj.a); // 1
console.log(obj.b); // undefined. 존재하지 않는 프로퍼티에 접근
console.log(b); // ReferenceError

var func = function () {};
var c = func();  
console.log(c); // undefined
```

<br>

undefined와 배열 예제코드

```js
var arr1 = [];
arr1.length = 3;
console.log(arr1); // [empty x 3]

var arr2 = new Array(3);
console.log(arr2); // [empty x 3] 

var arr3 = [undefined, undefined, undefined];
console.log(arr3); //[undefined, undefined, undefined];
```

1행에서 빈배열을 만들고 배열의 크기를 3으로 만들었지만 빈 요소만 확보하고 undefined이 할당돼 있지 않았다.

5행에서 new 연산자로 Array 생성자 함수를 호출하여 배열 인스턴스를 생성했고 크기는 3으로 지정했다.

이때 결과값은 arr1의 결과값과 같다.

이것을 보았을때 '비어있는 요소'와 'undefined를 할당한 요소'는 출력 결과부터 다르다.

'비어있는 요소'는 순회와 관련된 많은 배열 메서들의 순회 대상에서 제외된다.

예제코드를 보면서 이해해보자.

```js
var arr1 = [undefined, 1];
var arr2 = [];
arr2[1] = 1;

arr1.forEach(function (v,i) { console.log(v, i);}); // undefined 0 / 1 1
arr2.forEach(function (v,i) { console.log(v, i);}); // 1 1

arr1.map(function (v, i) {return v + i}); // [NaN, 2]
arr2.map(function (v,i) {return v + i}); // [empty, 2]

arr1.filter(function (v) {return !v;}); // [undefined]
arr2. filter(function (v) {return !v;}); // []

arr1.reduce(function (p, c, i) {return p + c + i;}, ''); // undefined011
arr2.reduce(function (p, c, i) {return p + c + i;}, ''); // 11
```

예제 arr1 은 undefined와 1을 직접 할당했지만 arr2는 빈 배열에 1을 할당했다.

배열의 각 요소를 순회하는 것을 기본으로 하는 메서드들 (forEach, map, filter, reduce)은 서로 다른 결과를 보여준다.

사용자가 undefined를 할당한 arr1은 일반적으로 알고 있는 배열의 모든 요소를 순회하여 결과를 출력한다.

그러나 arr2에서 각 메서드들은 비어 있는 요소에 대해서는 건너뛰는 모습을 볼 수 있다.

이런 이유는 '배열도 객체'이기 때문이라고 이해하자.

존재하지 않는 프로퍼티에 대해서는 순회를 할 수 없는 것은 당연한것이니까.

배열을 실제로 객체와 마찬가지로 특정 인덱스에 값을 지정할 때 비로소 빈 공간을 확보하고 인덱스를 이름으로 지정하고 데이터의 주솟값을 저장하는 동작을 한다.

**값이 지정되지 않은 인덱스는 '아직 존재하지 않는 프로퍼티'**라는 것이다.

> 정리하자면 undefined는 사용자가 명시적으로 부여한 경우와 요소에 접근할때 반환되는 경우가 있다.
> 
> 명시적으로 부여한 경우 undefined는 그 자체로 값이다.
>
> undefined가 "비어있음"을 뜻하지만 하나의 **값** 으로 동작하기에 프로퍼티나 배열의 요소는 고유한 키값이 실존하고 순회의 대상이 될 수 있다.
>
> 자바스크립트가 반환해주는 undefined는 해당 프로퍼티나 배열의 키값 자체가 존재하지 안흔다.
>
> 실존하는 데이터이지만 엔진이 반환해주는 undefined는 문자 그대로 값이 없다는것을 나타낸다.
>

이렇게 된다면 혼란을 야기하기에 우린 직접 undefined를 할당하지 말자.

"비어있음"을 명시적으로 나타내고 싶을 때는 undefined말고 "null"을 사용하고

undefined는 오직 "값을 대입하지 않은 변수에 접근하고자 할 때 자바스크립트 엔진이 반환해주는 값"으로 존재 수 있게 해준다.

> 여기서 null을 사용할 때 주의점은 typeof null이 object라는 점이다.
>
> 이것은 자바스크립트가 인정하는 자체 버그이다.
>

```js
var n = null;
console.log(typeof n); // object

console.log(n == undefined); // true;
console.log(n == null); // true;

console.log(n === undefined); // false;
console.log(n === null); // true;

```