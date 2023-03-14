// function greeter(fn: (a: string) => void) {
//   fn("hello, world");
// }

// function printToConsole(s: string) {
//   console.log(s);
// }

// greeter(printToConsole);

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + "returned" + fn(6));
}
