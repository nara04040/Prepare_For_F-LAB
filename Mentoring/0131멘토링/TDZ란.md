# TDZ (Temporal Dead Zone)

일시적 사각지대라고 부르며 변수 스코프 맨위에서 변수의 초기화 완료 시점까지의 범위를 말한다.

```js
function a () {
    console.log(foo)
    let foo = 2
}
```

console.log(foo)처럼 변수가 초기화되기 전에 사용되는 범위를 일컫는다.