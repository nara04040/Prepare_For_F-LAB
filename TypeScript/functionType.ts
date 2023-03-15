// function greeter(fn: (a: string) => void) {
//   fn("hello, world");
// }

// function printToConsole(s: string) {
//   console.log(s);
// }

// greeter(printToConsole);

// type DescribableFunction = {
//   description: string;
//   (someArg: number): boolean;
// };
// function doSomething(fn: DescribableFunction) {
//   console.log(fn.description + "returned" + fn(6));
// }

// 호출 시그니처
// 호출이 가능하면서 프로퍼티를 가진 어떤 것을 설명하고자 할 때는 호출 시그니처를 사용

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned" + fn(6));
}
