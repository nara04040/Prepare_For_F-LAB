const states = [
  { name: "Alabama", capital: "Montgomery" },
  { name: "Alaska", capital: "Juneau" },
  { name: "Arizona", capital: "Phoenix" },
  // ...
];

for (const state of states) {
  console.log(state.capitol);
}

// 실행결과는 undefined가 3개가 나오고 유효한 자바스크립트입니다.
// 즉 오류가 없이 실행이 된다는 말입니다...
// 이런경우에 타입스크립트의 타입체커는 추가적인 타입 구문이 없어도 오류를 찾아내줍니다.
