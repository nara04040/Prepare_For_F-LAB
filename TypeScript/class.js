// ts 클래스는 접근 제어자를 통한 접근 가능 범위를 설정이 가능하다.
// 각 속성에 데이터 타입을 지정이 가능하다.
var Book = /** @class */ (function () {
    function Book(title, author, pages) {
        this.pages = pages;
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    return Book;
}());
var revo = new Book("한 권", "nara", 222);
console.log(revo);
