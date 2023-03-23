// void는 어떤 타입도 존재할 수 없다라고 보면 됩니다.
// void는 보통 함수에서 반환 값이 없다는걸 표현하기 위해 사용합니다.

function warnUser(): void {
  console.log("void value");
}

let unusable: void = undefined;
unusable = null; // strictNullChecks가 사용되지 않는다면 성공하지만 사용한다면 실패합니다.
