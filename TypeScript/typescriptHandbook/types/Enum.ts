// enum은 값의 집합에 더 나은 이름을 붙여줄 수 있습니다.
// 기본적으로 enum은 0부터 멤버들의 번호를 매기며 하나의 값을 수동으로 설정하여 번호를 바꿀 수 있습니다.

enum Color {
  Red = 1, // 번호를 매김
  Green = 2, // 이런식으로 수동으로 값을 설정할 수 있음
  Blue,
}

let c: Color = Color.Green;
