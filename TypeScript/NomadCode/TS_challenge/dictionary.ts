/* 목표 : 타입스크립트의 클래스를 이용하여 Dict (딕셔너리. dictionary) 클래스를 만드세요.
   Dict 클래스는 아래와 같은 메소드들을 갖고 있어야 합니다. 

   - [x] add : 단어를 추가합니다.
   - [x] get(=== getWordTerm) : 단어의 정의를 반환합니다.
   - [x] delete(=== delTerm) : 단어를 삭제합니다.
   - [x] update : 단어를 업데이트 합니다.
   - [x] showAll : 딕셔너리의 단어를 모두 프린트합니다.
   - [x] count (=== countTerm) : 딕셔너리 단어들의 총 수를 반환합니다.
   - [x] upsert 단어를 업데이트 함. 존재하지 않을시. 이를 추가함. (update + insert = upsert)
   - [x] exists: 해당 단어가 사전에 존재하는지 여부를 알려줌.
   - [] bulkAdd: 다음과 같은 방식으로. 여러개의 단어를 한번에 추가할 수 있게 해줌. 
    [{term:"김치", definition:"대박이네~"}, {term:"아파트", definition:"비싸네~"}]
   - [] bulkDelete: 다음과 같은 방식으로. 여러개의 단어를 한번에 삭제할 수 있게 해줌. ["김치", "아파트"]
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

  update(oldTerm: string, currentTerm: string) {
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
  upSert(term: string, def: string) {
    const wordsKeys = Object.keys(this.words);
    const findKeys = wordsKeys.find((keys) => keys === term);
    // 없다면 추가해라
    // 있다면 단어를 교체해라
    if (findKeys === undefined) {
      this.words[term] = def;
    } else {
      this.words.findKeys === term;
    }
  }
  exists(term: string) {
    const wordsKeys = Object.keys(this.words);
    const findKeys = wordsKeys.find((keys) => keys === term);
    if (findKeys === undefined) {
      console.log("해당 값이 없습니다.");
    } else {
      console.log(`해당 값: ${term} 은 존재합니다.`);
    }
  }
  bulkAdd() {}
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국음식입니다.");
const pizza = new Word("pizza", "미국음식입니다.");

const dict = new Dict();

dict.add(kimchi); // dict에 단어를 추가
dict.add(pizza);
// console.log(dict);

// console.log(dict.getWordTerm(kimchi)); // 단어의 정의 반환
// console.log(dict.getWordTerm(pizza)); // 단어의 정의 반환

// dict.update("kimchi", "KIMCHI");
// console.log(dict);

// dict.delTerm("pizza");
// console.log(dict);

// dict.showAll();
// dict.add(pizza);
// dict.showAll();

dict.upSert("rice", "한국밥입니다.");
console.log(dict);

dict.exists("rice");
