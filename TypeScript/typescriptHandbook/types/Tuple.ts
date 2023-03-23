// tuple을 사용한다면 요소의 타입과 개수가 고정된 배열을 표현할 수 있습니다.
// 타입은 모두 같을 필요가 없으며 쌍으로 있는 값을 나타낼 수도 있습니다.

let x: [string, number];

x = ["hello", 10]; // o

x = [10, "hi"]; // x

// 정해진 인덱스에 위치한 요소에 접근한다면 해당 타입이 나타납니다.
console.log(x[0].substring(1)); // o

console.log(x[1].substring(1)); // x
