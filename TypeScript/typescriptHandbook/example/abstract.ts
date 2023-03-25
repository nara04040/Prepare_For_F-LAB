abstract class Project1 {
  public project_name: string | null = null;
  private budget: number = 2000000;

  // 추상 메서드
  public abstract changeProjectName(name: string): void;

  // 실제 메서드
  public calcBudget(): number {
    return this.budget * 2;
  }
}

class WebProject extends Project1 {
  public changeProjectName(name: string): void {
    this.project_name = name;
  }
}

let new_project1 = new WebProject();

console.log(new_project1.project_name);

new_project1.changeProjectName("nara");
console.log(new_project1.project_name);
