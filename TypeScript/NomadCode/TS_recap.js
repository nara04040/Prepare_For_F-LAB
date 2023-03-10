"use strict";
class Dict {
    constructor() {
        this.words = {};
    }
    add(word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    def(term) {
        return this.words[term];
    }
    update(word) {
        if (this.words[word.term] !== undefined) {
            this.words[word.term] = word.def;
        }
    }
    del(term) {
        if (this.words[term] !== undefined) {
            delete this.words[term];
        }
    }
}
class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
    }
}
const kimchi = new Word("kimchi", "super cool food");
const pizza = new Word("pizza", "super nice piazza");
const dict = new Dict();
dict.add(kimchi);
dict.add(pizza);
console.log("KIMCHI:", dict.def("kimchi"));
console.log("PIZZA:", dict.def("pizza"));
dict.update(new Word("kimchi", "very incredible super food"));
console.log("UPDATE KIMCHI:", dict.def("kimchi"));
console.log("NOT UPDATE PIZZA:", dict.def("pizza"));
dict.del("pizza");
console.log("DELETE PIZZA", dict.def("pizza"));
console.log("NOT DELETE KIMCHI:", dict.def("kimchi"));
