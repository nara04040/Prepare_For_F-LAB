function greet(who: string) {
  console.log("Hello", who);
}

greet("jin");

// type Error를 출력합니다. 코드에는 타입 구문이 없지만 타입체커는 에러를 찾아냅니다.
