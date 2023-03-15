// 메서드 접근 제어자

class Book2 {
  public title: string;

  constructor(title: string) {
    this.title = title;
  }

  public printTitle(): string {
    return `${this.title} 타이틀`;
  }
}
