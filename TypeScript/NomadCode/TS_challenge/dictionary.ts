/* 목표 : 타입스크립트의 클래스를 이용하여 Dict (딕셔너리. dictionary) 클래스를 만드세요.
   Dict 클래스는 아래와 같은 메소드들을 갖고 있어야 합니다. 

   - [x] add : 단어를 추가합니다.
   - [x] get(=== getWordTerm) : 단어의 정의를 반환합니다.
   - [x] delete(=== delTerm) : 단어를 삭제합니다.
   - [x] update(=== updateTerm) : 단어를 업데이트 합니다.
   - [x] showAll : 딕셔너리의 단어를 모두 프린트합니다.
   - [x] count (=== countTerm) : 딕셔너리 단어들의 총 수를 반환합니다.
 */

type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }

  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  getWordTerm(word: Word) {
    // get은 js의 예약어 이기에 임의로 getWordTerm이라는 함수명으로 바꿨습니다.
    return word.def;
  }

  updateTerm(oldTerm: string, currentTerm: string) {
    if (this.words.hasOwnProperty(oldTerm)) {
      this.words[currentTerm] = this.words[oldTerm];
      delete this.words[oldTerm];
    }
  }

  delTerm(term: string) {
    delete this.words[term];
  }

  showAll() {
    return console.log(this.words);
  }
  countTerm() {
    return console.log(Object.keys(this.words).length);
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국음식입니다.");
const pizza = new Word("pizza", "미국음식입니다.");

const dict = new Dict();

dict.add(kimchi); // dict에 단어를 추가
dict.add(pizza);
console.log(dict);

console.log(dict.getWordTerm(kimchi)); // 단어의 정의 반환
console.log(dict.getWordTerm(pizza)); // 단어의 정의 반환

dict.updateTerm("kimchi", "KIMCHI");
console.log(dict);

dict.delTerm("pizza");
console.log(dict);

dict.showAll();
dict.add(pizza);
dict.showAll();

dict.countTerm();
