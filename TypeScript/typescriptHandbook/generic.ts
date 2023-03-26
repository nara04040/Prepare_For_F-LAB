//  제네릭은 클래스나 함수에서 사용할 타입을 사용할 때 결정하는 프로그래밍 기법이다.
//  제네릭을 사용한다면 일반적인 타입을 사용하여 여러 타입을 대체할 수 있습니다. 또한 코드 재사용성을 높일 수 있습니다.

// function repeat(value: any, times: number): any[] {
//   return Array(times).fill(value);
// }

// 위 코드를 제네릭 함수로 구현한다면 이렇게 가능하다.
function repeat<T>(value: T, times: number): T[] {
  return Array(times).fill(value);
}

// T는 타입 변수이다. 실제로 사용될 타입을 나타내는 매개변수입니다.
// 함수를 호출할 때는 실제로 사용될 타입으로 대체됩니다.

const number = repeat(0, 5); // [0,0,0,0,0]
const strings = repeat("hello", 3); // ['hello','hello','hello']

class Stack<T> {
  private items: T[] = [];

  push(item: T) {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
console.log(numberStack.pop()); // 2

const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");
console.log(stringStack.pop()); // 'world'
