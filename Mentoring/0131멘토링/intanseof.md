# instanceof연산자

instanceof를 사용한다면 객체가 특정 클래스에 속하는지를 판별할 수 있고 또한 상속 관계도 확인을 해줍니다.

```js
obj instanceof Class
```

위 코드처럼 작성되며 obj가 Class에 속하거나 상속받는 클래스에 속한다면 true가 반환됩니다.

<br>
예시

```js
class Rabbit{}
let rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit); // true
```

instanceof는 생성자 함수, Array등 내장클래스 에서도 사용이 가능합니다.

```js
function Rabbit() {}
let arr = [1,2,3] // Array는 프로토타입 기반으로 Object를 상속받는다.

console.log(new Rabbit() instanceof Rabbit); // true
console.log(arr instanceof Array) // true
console.log(arr instanceof Object) // true
```

instanceof와 비슷한 메서드인 objA.isPrototypeOf(objB)도 존재함니다.

하지만 isPrototypeOf는 Class생성자를 제외하고 포함여부를 검사하는 점이 다릅니다.

