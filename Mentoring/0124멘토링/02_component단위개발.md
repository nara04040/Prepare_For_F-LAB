# component 단위 개발

## 1. component란

https://hanamon.kr/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-component%EB%9E%80/

프로그래밍에 있어 재사용이 가능한 각각의 **"각각의 독립된 모듈"**

component기반으로 프로그래밍을 한다면 레고하는 것처럼 컴포넌트를 조합하여 화면을 구성할 수 있다.

**재사용의 중요성과 필요성을 위해 나온 기술**

W3C에서 새로 정한 규격이라고 말할 수 있다.

"WEB Component"를 사용한다면 vue, react같은 라이브러리에 의존하지 않고 운영이 가능하게끔 작성이 가능하다.



### WEB Component 규격

- Shadow DOM
  - DOM과 스타일을 캡슐화를 하여 메인에서 독립적으로 스크립트, 스타일을 처리할 수 있다.
- Custom Elements
  - HTML에서 새로운 HTML/DOM요소를 정의할 수 있는 JS API
- ES Modules
  - HTML Import를 대체하여 나온 규격.
  - JavaScript로 구현하는 모듈 시스템




## Storybook

UI개발, CDD를 하기위해 만들어진 도구이다.

각각의 Component를 따로 볼 수 있게 구성하여 한 번에 하나의 컴포넌트에서 작업할 수 있게 해준다.

애플리케이션 탐색 및 데이터베일스로 강제로 이동하는 절차가 없이 UI를 한눈에 보고 개발을 할 수 있다.

### why?

Storybook은 독립적인 개발환경에서 실행된다.

따라서 개발자는 다양한 상황에서 구애받지않고 UI컴포넌트를 집중적으로 개발이 가능하다.

### CSS in JS

프로젝트의 규모와 복잡도가 커져가고 있기에 CSS를 구조화시킬 필요가 생겼다.

모바일, 태블릿, 등 다양한 디바이스에 대한 디스플레이를 커버해야하기 때문이다.

이런 문제점을 해결하기위해 여러 개념이 등장했다.

1. CSS 전처리기 (CSS Preprocesseor)
2. CSS 방법론
3. Styled-Compoenent

### CSS 전처리기

SASS같은 전처리기는 CSS를 확장시키는 스크립팅 언어입니다.

JS처럼 여러 특정 속성을 변수로 선언하여 반복되는 코드를 여러 곳에서 **재사용** 할 수 있게 해준다.

### CSS 방법론

대표적인 방법론으로는 BEM이 있다.

Block, Element, Modifier로 구분하여 클래스명을 사용한다.

```css
.header_navigation--navi-text {
    color: red;
}
```

하지만 이런 방법론은 클래스명이 장황하고, 마크업이 불필요하게 커지는 문제점이 있다.

### CSS-in-JS : Styled-Component

CSS를 컴포넌트 기반으로 작성하는 방법

Styled-Compoenet는 기능적으로나 상태를 가진 컴포넌트로부터 UI로부터 분리하여 사용이 가능하다.

```js
const Button = styled.a`
display: inline-block;
border-radius: 3px;
padding: .5rem 0;
margin: .5rem 1rem
width: 11rem
`
```

위 코드처럼 변수를 선언하듯 Button을 만들고 CSS문법을 이용하여 스타일 속성을 정의한다.

