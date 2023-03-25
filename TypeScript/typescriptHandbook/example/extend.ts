// 클래스 상속에 extends를 사용
// 추상화는 class에서 abstract라 표기
// 정의만 있을뿐 body가 없다.
// 말 그대로 추상이여서 인스턴스를 생성하지 않는다.

abstract class Project {
  public project_name: string | null = null;
  private budget: number = 2000000;

  // 추상 메서드
  public abstract changeProjectName(name: string): void;

  // 실제 메서드
  public calcBudget(): number {
    return this.budget * 2;
  }
}

let new_project = new Project(); // 오류
