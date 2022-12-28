// arr은 배열이다.
// arr에서 중복 값을 제거해주는 unique(arr)를 만들어라

// 내 해답
// function unique(arr) {
//   let set = new Set(arr);
//   return set;
// }

function unique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log(unique(values));
