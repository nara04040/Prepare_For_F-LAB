class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // 원의 지름
  getDiameter() {
    return 2 * this.radius;
  }

  // 원의 둘레
  getPerimerter() {
    return 2 * Math.PI * this.radius;
  }

  //   원의 넓이
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Cylinder extends Circle {
  constructor(radius, height) {
    super(radius);
    this.height = height;
  }

  getArea() {
    return this.height * super.getPerimerter() + 2 * super.getArea();
  }

  getVolume() {
    return super.getArea() * this.height;
  }
}
const cylinder = new Cylinder(2, 10);
