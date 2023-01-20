// 구문

/* 
arr.map(callback(currentValue[, index[, array]]) [, thisArg])

callback : 새로운 배열 요소를 생성하는 함수 , 세가지 인수를 가진다.

    currentValue : 처리할 현재 요소

    index : 처리할 현재 요소의 인덱스

    array : map()을 호출한 배열

thisArg : callback을 실행할 때 사용될 this 값


map은 callback함수를 각각의 요소에 대해 한번씩 순서대로 불러 함수의 반환값으로 새로운 배열을 만든다.

callback함수는 배열 값이 들어있는 인덱스에 대해서만 호출된다.
*/

const arr1 = [1, 4, 9, 16];
const map1 = arr1.map((x) => x * 2);
console.log(map1);

// ==========================================
const num = [1, 4, 9];
const num1 = num.map(Math.sqrt);
console.log(num1);

// =========================================
const keyArr = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

let reformatArr = keyArr.map(function (obj) {
  let rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});

console.log(reformatArr);
console.log(keyArr);

// ==================================

let num2 = [1, 4, 9];
let double = num2.map(function (num2) {
  return num2 * 2;
});

console.log(double); // [2,8,18]
