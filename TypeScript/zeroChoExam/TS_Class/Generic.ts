// 타입을 변수처럼 활용하는 것을 제네릭이다.
// 현재는 타입이 모르지만 이후에 결정하겠다라는 흐름

// function add<T>(x: T, y: T): T {
//   return x + y;
// }

// add(1, 2);

// 이때 제네릭에 extends를 사용한다면 제한시킬 수 있습니다.

function add<T extends number, K extends string>(x: T, y: K): T {
  return x + y;
}

add(1, 2);
add("1", "2"); // 제네릭 + extends로 number타입으로 제한시켜 불가능
add(2, "1"); // 이 함수 호출은 가능
// 또한 제네릭을 여러가지 타입으로 제한시키는 것도 가능
