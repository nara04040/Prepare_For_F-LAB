# 전역공간에서의 this

> 실행 컨텍스트는 함수를 호출할 때 생성된다.
>
>이 말은 this는 함수를 호출할 때 결정된다.

전역 공간에서는 this는 전역 객체를 가리킨다.

브라우저 환경에서 전역객체는 window이고 Node.js환경에서는 global입니다.

<br>

전역공간에서의 this(브라우저 환경)

```js
console.log(this); // { alert: f(), atob: f(), blur: f(), btoa: f(), ...}
console.log(window); // { alert: f(), atob: f(), blur: f(), btoa: f(), ...}
console.log(this === window); // true
```

<br>

전역 공간에서의 this(Node.js 환경)

```js
console.log(this); // { process: { title: 'node', version: 'v10.13.0', ...}}
console.log(global); // { process: { title: 'node', version: 'v10.13.0', ...}}
console.log(this === global); // true
```

<br>

전역변수와 전역객체

```js
var a = 1;
console.log(a); // 1
console.log(window.a); // 1
console.log(this.a); // 1
```

전역공간에서 변수 a에 1을 할당했지만 window.a, this.a 모두 1을 출력한다.

이유는 **자바스크립트의 모든 변수는 특정 객체의 프로퍼티로 동작하기 때문이다.**

var연산자를 이용하여 변수를 선언하더라도 실제 자바스크립트 엔진은 특정 객체의 프로퍼티로 인식한다.

특정 객체는 실행 컨텍스트의 **LexicalEnvironment(L.E)**이다.

실행 컨텍스트는 변수를 수집하여 L.E의 프로퍼티를 저장한다.

이후 변수를 호출하면 L.E를 조회하여 일치하는 프로퍼티가 있다면 값을 반환한다.


