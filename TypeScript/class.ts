// ts 클래스는 접근 제어자를 통한 접근 가능 범위를 설정이 가능하다.
// 각 속성에 데이터 타입을 지정이 가능하다.

class Book {
  // public 클래스 외부에서 접근 가능
  public title: string;

  author: string;

  // private: Book 클래스 내부에서만 접근 가능
  private menufacturing_type: string;

  // protected: Book 클래스를 포함 서브 클래스에서만 접근가능
  protected paper_type: string;

  constructor(title: string, author: string, public pages: number) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

let revo = new Book("한 권", "nara", 222);
console.log(revo);
