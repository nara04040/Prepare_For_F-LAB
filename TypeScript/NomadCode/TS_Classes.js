"use strict";
class User {
    constructor(firstName, lastName, nickname) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Player extends User {
    getNickName() {
        console.log(this.nickName);
    }
}
// const nara = new User('hannara', 'yoo', "jin")
const nara = new Player('hannara', 'yoo', "jin");
nara.getFullName();
// 추상 클래스는 오직 다른곳에서만 상속받을 수 있는 클래스
// 추상 메서드는 추상 클래스를 상속받는 모든 것들이 구현해야하는 메서드
// private로 선언한 메서드는 선언한 클래스 안에서만 접근이 가능
// protected로 선언한 메서드는 선언한 클래스 안과 상속받은 클래스 안에서만 접근이 가능
// public으로 선언한 메서드는 선언한 클래서 안, 상속받은 클래스 안, 인스턴스에서도 접근이 가능하다.
/*
 추상(abstract) 클래스는 오직 다른 클래스가 상속받을 수 있는 클래스이다. but 직접 새로운 인스턴스를 만들 수 없다.
 추상 클래스 : 다른 클래스가 상속받을 수 있는 클래스

 추상 메서드는 추상 클래스를 상속받는 클래스들이 반드시 구현해야만 하는 메서드이다.

 public: 모든 클래스에서 접근이 가능
 private: 해당 클래스 안에서만 접근 가능
 protected: 해당 클래스와 자식 클래스에서 접근이 가능
*/ 
