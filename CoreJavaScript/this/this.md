# this

이전에 공부했던 것처럼 thisBinding은 실행컨텍스트가 활성화될 때 한다고 알고 있다.

<img src="./img/thisBinding.png">

그리고 실행컨텍스트는 함수가 호출되는 순간 생성된다. 

**즉 thisBinding은 함수가 호출될 때 결정되는 것이다.**

this는 이런 특성을 보아 동적으로 바인딩된다고 알 수 있다.

<br>

## this는 호출하는 방식에 따라서 달라진다.

<br>

<img src="./img/호출시달라지는this.png">

<br>

### 전역공간에서의  this

**전역공간에서의 this는 전역 객체를 가리킵니다.**

window(브라우저) / global(node)

자바스크립트의 런타임에 따라서 전역객체의 정보가 달라진다.

<br>

### 함수 호출시 this

**함수 호출시 함수 내부에서 this가 가리키는 것은 전역객체입니다.**

window(브라우저) / global(node)

```js
function a() {
    console.log(this)
};
a();
```

호출한 것을 보면 전역공간에서 그냥 함수 a를 호출한 것이다. 당연히 호출한 대상은 전역 객체가 된다.

<br>

```js
function a() {
    console.log(this);
};
a();

function b() {
    function c() {
        console.log(this)
    };
    c();
}
b();
```

b함수를 호출한 것은 전역객체라고 이해하지만 c함수를 호출한 곳은 b함수 내부이기에 주체가 b라고 생각해야하지 않을까?

이것이 문제라고 생각했기에 ES6에서는 this바인딩을 하지 않는 arrow function이 등장했다.

arrow function은 바로 위의 컨텍스트의 this를 그대로 사용한다.

하지만 **ES5환경에서의 함수에서 호출하는 this는 전역 객체를 가리킨다.**


```js
var d = {
    e : function() {
        function f() {
            console.log(this);
        }
        f();
    }
}

d.e()
```

f함수를 호출하는 this는 무조건 전역객체를 가리킨다. 호출 형태만 보고 판단하면 된다.


<br>

### 메서드 호출시 this

메서드 호출한 주체 (메서드명 앞)이 된다.

```js
var a = {
    b : function() {
        console.log(this);
    }
}
a.b();
```

<br>

위 예제에서는 a.b를 호출하였다. 점 앞인 a가 this이다.

원래는 함수이지만 어떤 객체와 관련된 동작을 하게 된다면 "메서드"라고 부른다.

<br>

```js
var a = {
    b : {
        c: function() {
            console.log(this);
        }
    }
}

a.b.c()
```

c의 this는 a.b까지가 this가 된다.

하지만 .앞이 this대상이 아닌 예외의 경우도 있다.

<br>

```js
obj.func();
obj['func']();
// .은 대괄호표기로도 사용될 수 있다.
// this는 obj가 된다.


person.info.getName();  // getName()이 메서드이고 person.info가 this가 된다.
person.info['getName']();  // ['getName']()이 메서드, person.info가 this가 된다.


person['info'].getName(); // getName()
person['info']['getName']();

```

