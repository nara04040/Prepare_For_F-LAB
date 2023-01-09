## 콜백함수에서의 this

콜백함수도 함수이기 때문에 기본적으로 this가 전역객체를 참조하지 않는다.

하지만 별도로 this를 지정할 경우는 지정한 대상을 참조한다.

<br>

```js
Array.prototype.map = function (callback, thisArg) {
    var mappedArr = [];
    for (var i = 0; i < this.length; i++) {
        var mappedValue = callback.call(thisArg || window, this[i], i, this);
        vappedArr[i] = mappedValue;
    }
    return mappedArr;
}
```

메서드 구현 핵심은 call/apply에 있다.

this에는 thisArg가 있을 경우에 그 값을, 없다면 전역객체에 지정

첫 번째 인자 : this가 배열을 가리키다. 배열의 i번째 요소 값, 

두 번째 인자 : i값을 ,

세 번째 인자 : 배열 자체를 지정해 호출한다.

변수 mappedArr에 담겨서 mappedArr의 i번째 인자가 할당된다.


## call , apply

#### call 함수

1. 구문 

fun.call([thisObj[, arg[, arg2[, ...]]]])

func : 쓸 메서드

thisObj : 현재 객체로 사용될 객체

arg1,2,n... : 메서드에 전달될 인수 목록

call메서드는 다른 객체 대신 메서드를 호출하는데 사용된다.



#### apply함수

1. 구문

func.apply([thisObj[,argArray]])

fun : 쓸 메서드

thisObj: 현재 객체로 사용될 객체

argArray : 함수에 전달될 인수 집합

============

<br>

call은 인자 하나하나를 , apply는 인자 리스트를 전달한다.



<br>

### 사용예시

```js
function sum (num1, num2) {
    return num1 + num2;
}

console.log(sum(1,2)); //3
console.log(sum.call(this,1,2)); // 3
```