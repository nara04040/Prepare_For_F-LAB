// function abc(a: number, b?: number, c?: number) {}
function abc(a: number, b?: number, ...arg: number[]) {}

abc(1);
abc(1, 2);
abc(1, 2, 3);

let obj: { a: string; b?: string } = { a: "hello", b: "world" };
obj = { a: "hello" };

/**
 * optional?
 * optional의 뜻은 있을수도 있고 없을수도 있다.
 * javascript에서 optional은 체인의 참조가 유효한지 명시적으로 검증하지 않으며 연결된 객체 체인 안에 깊숙히 위치한 속성 값을 읽을 수 있습니다.
 * 참조가 null또는 undifrined라면 에러 대신 표현식의 리턴 값이 undefined가 출력된다.
 */
