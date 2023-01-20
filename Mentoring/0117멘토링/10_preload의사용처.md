# preload?

link 요소의 rel특성에 preload가 사용되어진다.

preload값은 HTML의 head에서 가져오기 요청을 선언하게 해주며 페이지에 즉시 필요할 **리소스**를 명시할 수 있습니다.

이런 리소스는 **브라우저의 주요 렌더링 절차가 개입하기 전 페이지 생명주기의 초기에서 불러오고자** 하는 리소스이다.

이런 방법은 해당 리소스를 더 빨리 사용할 수 있게 해주고, 페이지 렌더링을 막을 가능성이 낮아져 **성능향상**을 보인다.

<br>

```html
<!-- blabla~ -->
<link rel='preload' href='main.css' as='style'>
<link rel='preload' href='main.js' as='script'>

<link rel='stylesheet' href='style.css'>
<!-- blabla~ -->
```

<br>

href : 리소스의 경로를 명시

as : 리소스의 유형을 명시

<br>

큰 차이가 없이 보이겠지만 다음과 같은 상황에서는 preload의 이점은 명확해진다.

- 폰트, 이미지 등 CSS내부에 명시된 리소스들
- JSON, import된 스크립트 등 javascript가 요청할 수 있는 리소스
- 크기가 큰 이미지나 비디오

<br>

preload는 as를 이용하여 특정 유형의 컨텐츠를 프리로드되도록 지정한다면 브라우저는 다음과 같은 작업이 가능하다.

- 리소스의 우선순위를 정확하게 지정이 가능하다.
- 캐시에 리소스를 저장하여 추후 요청에 재활용이 가능하다.
- 리소스에 올바른 컨텐츠 보안 정책을 적용시킬 수 있다.
- 리소스에 올바른 Accept 요청 헤더를 설정 할 수 있다.



<br>

참고 : https://developer.mozilla.org/ko/docs/Web/HTML/Attributes/rel/preload