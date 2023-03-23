// 알지 못하는 타입을 표현해야할 때는 Any를 사용할 수 있습니다.
// 이 경우 타입 검사를 진행하지 않고 값들이 컴파일하는 시간에 검사를 통과합니다.

let notSure: any = 4;
notSure = "stringstring";
notSure = false;

// 하지만 되도록이면 사용을 하지 않는 방향으로 개발하는 것이 좋습니다.
