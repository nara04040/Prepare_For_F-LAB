interface Animal {
  name: string;
  type: string;
  sound: string;
}

abstract class AnimalShelter<T extends Animal> {
  // Animal의 T를 받는다.
  protected abstract animals: T[];

  abstract add(animal: T): void; // 추상메서드
  abstract remove(animal: T): void; // 추상메서드

  find(name: string): T | undefined {
    return this.animals.find((animal) => animal.name === name);
  }

  makeSound(name: string): void {
    const animal = this.find(name);
    if (animal) {
      console.log(`${animal.name} ${animal.type} ${animal.sound}`);
    } else {
      console.log(`Animal ${name} 은 없어요`);
    }
  }
}

class DogShelter extends AnimalShelter<Animal & { breed: string }> {
  // AnimalShelter 추상 클래스를 상속
  protected animals: (Animal & { breed: string })[] = [];

  add(dog: Animal & { breed: string }): void {
    this.animals.push(dog);
  }

  remove(dog: Animal & { breed: string }): void {
    const index = this.animals.findIndex((animal) => animal.name === dog.name);
    if (index !== -1) {
      this.animals.splice(index, 1);
    }
  }
}

const dogShelter = new DogShelter();
console.log(dogShelter);
dogShelter.add({ name: "망고", type: "dog", sound: "멍", breed: "골든리트리버" });
console.log(dogShelter);
dogShelter.makeSound("멍");
