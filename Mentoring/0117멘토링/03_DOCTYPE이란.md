# DOCTYPE이란

doctype은 HTML의 최상단에 위치해있고 브라우저가 문서를 렌더링 할 때 Quirks Mode로 바뀌지 않도록하는 것


<br>

## Quirks Mode? (호환모드 || 비표준 모드)

HTML을 사용할 때 DOCTYPE을 사용하면 Standard mode로 랜더하고 없다면 Quirks mode로 실행한다.

문서가 최신이라고 판단하면 Standard mode로 랜더, 예전이라고 판단한다면 Quirks mode로 랜더

Quirks mode는 오래된 웹 페이지들이 최신 버전의 브라우저에서 깨져 보이지 않으려는 것에 의의

======================================

과거의 웹은 넷스케이프용, 마이크로소프트용 두 버전으로 나눠서 만들어졌다.

이후 W3C에서 웹 표준을 정할 당시 새롭게 만들어진 표준을 기반으로 예전 웹사이트들이 제대로 표현할 수 없었따.

그래서 브라우저들은 새로운 표준으로 제작된 사이트와 예전 방식으로 제작된 사이트를 렌더링하기 위해 두가지를 제공했다.

웹브라우저의 레이아웃 엔진으로 하는 호환모드(Quirks Mode), 거의 표준모드 (almost standard mode), 표준모드 (standards mode)로 존재한다.

이중에서 호환모드 (Quirks mode)에서는 기존 방식으로 제작된 사이트를 표현하기위해 Navigator4, 익스플로러5의 비표준 동작들을 에뮬래이션해준다.

즉 DOCTYPE이 있다면 Standards mode로 랜더링해주고 없다면 Quirks Mode로 랜더링한다.