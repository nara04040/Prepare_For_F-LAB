const { useState } = require("react");
// 어떤 종류의 자바스크립트 값이든 state에 저장이 가능합니다.
// 자바스크립트 값은 불변합니다. 렌더링을 하여 값이 바뀔 수 있습니다.

const [position, setPosition] = useState({ x: 0, y: 0 });
// 이상태로 내용을 변경이 가능합니다.
