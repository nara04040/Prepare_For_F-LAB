interface A {
  readonly a: string;
  b: string;
}
class B implements A {
  private a: string = "123";
  protected b: string = "world";
  public c: string = "wow";

  method() {
    console.log(this.a); // 클래스 내부에서 private 접근자 사용가능
    console.log(this.b); // 클래스 내부에서 protected 접근자 사용가능
    console.log(this.c); // 클래스 내부에서 public 접근자 사용가능
  }
}

class C extends B {}
new C().a; // 클래스 내부에서 private 접근자 사용 불가능
new C().b; // 클래스 내부에서 private 접근자 사용가능
new C().c;

/* 
    public
  클래스 내부에서 사용이 가능    자식 클래스에서 사용 가능   클래스 인스턴스에서 사용 가능


    protected
  클래스 내부에서 사용 가능   자식 클래스에서 사용 가능   클래스 인스턴스에서 사용 불가능


    private
  클래스 내부에서 사용가능    자식 클래스에서 사용 불가능  클래스 인스턴스에서 사용 불가능
*/
