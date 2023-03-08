// 타입스크립트는 타입구문을 추가한다면 더 많은 오류를 찾아낼 수 있습니다.
// 그 이유는 타입 구문을 통해 타입스크립트에게 알려줄 수 있기 때문입니다.

const states = [
  { name: "Alabama", capitol: "Montgomery" },
  { name: "Alaska", capitol: "Juneau" },
  { name: "Arizona", capitol: "Phoenix" },
  // ...
];

for (const state of states) {
  console.log(state.capital);
}

// 위 코드를 본다면 타입스크립트가 제시한 해결책은 잘못된 해결책입니다.
// 다른 한곳에서 capitol이라고 다른 타이핑을 했지만 타입스크립트는 어느 쪽이 오타인지를 판단하지 못합니다.
// 따라서 명시적으로 states 를 선언하여 의도를 분명히 하는 것이 좋습니다. (05.ts 에서 계속)
