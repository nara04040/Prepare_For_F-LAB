interface State {
  name: string;
  capital: string;
}

const states: State[] = [
  { name: "Alabama", capitol: "Montgomery" },
  { name: "Alaska", capitol: "Juneau" },
  { name: "Arizona", capitol: "Phoenix" },
  // ...
];

for (const state of states) {
  console.log(state.capital);
}

// 이제 오류가 어디서 발생한지를 알 수 있으며 제시된 해결책도 올바른 해결책입니다.
// 이렇게 타입 구문을 추가한다면 오류를 쉽게 찾을 수 있습니다.
