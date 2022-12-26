// 숫자 1+2+...+n을 계산하는 함수 sumTo(n)을 만들자

// for반복문 사용하기
function sumTo(n) {
  let sum = 0;
  for (let i = 0; i < n + 1; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumTo(100));

//  재귀사용하기 (n > 1일 때 sumTo(n) = n + sumTo(n-1))

function sumTo2(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

console.log(sumTo2(100));

// 등차수열 합고식 sum(n) = n * n(n+1) / 2를 사용하여 만들기
function sumTo3(n) {
  return (n * (n + 1)) / 2;
}
console.log(sumTo3(100));
