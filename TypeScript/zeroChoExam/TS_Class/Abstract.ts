abstract class B {
  private readonly a: string = "123";
  b: string = "world";
  c: string = "wow";

  abstract method(): void;

  method2() {
    return "3";
  }
}

class C1 extends B {
  method(): void {
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
  }
}

new C1().a;
new C1().b;
new C1().c;

/**
 * abstract
 * 추상화 개념
 * 객체 지향 프로그래밍에서 핵심적인 아이디어 중 하나이다.
 * 추상화 클래스는 class앞에 abstract를 사용하여 선언한다.
 * 추상화 클래스는 구현을 하는 클래스가 아니라 객체 인스턴스를 생성할 수 없습니다.
 * 추상화 클래스안에서도 메서드 선언은 가능합니다 하지만 이 추상화 클래스를 상속하는 클래스 같은 경우 무조건 그 메서드를 사용해야합니다.
 */
