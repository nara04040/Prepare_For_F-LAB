// 타입가드

// function numOfStr(a: number | string) {
//   if (typeof a === "string") {
//     a.split(",");
//   } else {
//     a.toFixed(1);
//   }
// }

// numOfStr(123);
// numOfStr("123");

// 타입가드 배열형태

// function numOrArray(a: number | number[]) {
//   if (Array.isArray(a)) {
//     console.log(a.slice(1));
//   } else {
//     console.log(a.toFixed(1));
//   }
// }

// numOrArray([1, 2, 3]);
// numOrArray(123);

// 타입가드 객체형태
type B = { type: "b"; bbb: string };
type C = { type: "c"; ccc: string };
type D = { type: "d"; ddd: string };

type A = B | C | D;
function typeCheck(a: A) {
  if (a.type === "b") {
    a.bbb;
  } else if (a.type === "c") {
    a.ccc;
  } else {
    a.ddd;
  }
}
