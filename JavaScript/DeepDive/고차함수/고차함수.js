// .find()

// indexOf : 찾고자 하는 값을 인덱스로 줌
// include() : 찾고자 하는 값을 Bool로 줌
// find() : 찾고자하는 그대로 반환

// arr.find((element, index, array) => {
//   // ~~
// }, thisArg);

const numArr = [1, 3, 3, 5, 7, 10, 12];
const objArr = [
  { name: "nara", age: 27 },
  { name: "wuga", age: 26 },
  { name: "ann", age: 27 },
];

console.log(
  objArr.find((item) => {
    return item.age === 27;
  }) // {name: 'nara', age: 27}
);

// 주어진 배열을 순회하면서 콜백함수의 실행의 반환값이 true에 해당하는 첫 요소를 반환

// 여러개를 반환하고 싶다면 filter를 사용

console.log(numArr.find((item) => item === 3));
console.log(numArr.filter((item) => item === 3));

// findIndex()

// indexOf()콜백함수 버전
// find()의 리턴값이 인덱스

// Array.findIndex((element, index, array) => {
// element : 현재 배열요소
// index : 배열 인덱스
// array : 참조한 배열
// thisArg: 콜백함수에서 사용할 this
// }, thisArg)

console.log(
  objArr.findIndex((item) => {
    return item.name === "ann";
  })
);

// filter()

console.log(
  numArr.filter((item) => {
    return item % 2 !== 0;
  })
);
