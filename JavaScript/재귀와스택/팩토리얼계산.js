// 팩토리얼은 n이 자연수일때 1부터 n까지 모든 자연수의 곱을 의미한다.
// n팩토리얼은 n!으로 표시한다.

// 재귀를 사용하여 n!을 계산하는 함수, factorial(n)을 만들어보아라.

function factorial(n) {
  let result = 0;
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));
