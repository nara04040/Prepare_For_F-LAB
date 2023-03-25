// function numOfStr(a: number | string) {
//   if (typeof a === "string") {
//     a.split(",");
//   } else {
//     a.toFixed(1);
//   }
// }
// numOfStr(123);
// numOfStr("123");
function numOrArray(a) {
    if (Array.isArray(a)) {
        console.log(a.slice(1));
    }
    else {
        console.log(a.toFixed(1));
    }
}
numOrArray([1, 2, 3]);
numOrArray(123);
