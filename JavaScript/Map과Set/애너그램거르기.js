// 애너그램은 단어나 문장을 구성하고 있는 문자의 순서를 바꿔서 다른 단어나 문장을 만드는 놀이이다.

// example
// 1. nap - pan
// 2. ear - are - era
// 3. cheaters - hectares - teachers

// 애너그램으로 만든 단어를 걸러주는 함수 aclean(arr)를 만드세요.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map();

  for (let words of arr) {
    let sorted = words.toLowerCase().split("").sort().join("");
    map.set(sorted, words);
  }
  return Array.from(map.values());
}

console.log(aclean(arr));
