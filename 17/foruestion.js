//클래스
//-> 객체 생성 템플릿 => 객체를 만들기 위해 사용
class Cat {
  //생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //메소드
  mew() {
    console.log("야옹~");
  }
  //메소드2
  eat() {
    console.log("밥먹자!!");
  }
}
let navi = new Cat("나비", 1);
navi.mew();
navi.eat();
//class가 없던 시절
let tv1 = {
  name: "aaa tv",
  price: 2000,
  size: "56inch",
};
let tv2 = {
  name: "bbb tv",
  price: 3000,
  size: "27inch",
};
let tv3 = {
  name: "ccc tv",
  size: "55inch",
};
console.log(tv1.price, tv2.price, tv3.price);
//클래스 등장 = 일종의 작업지시서
class TV {
  name = "";
  price = 0;
  size = "";
  constructor(name, price, size) {
    //this: 여기 클래스 안에 있는 속성
    //this.name : 이 클래스 안에 있는 name!
    this.name = nam
    this.price = price;
    this.size = size;
  }
  getPrice() {
    return this.price + "만원";
  }
  setPrice(price) {
    this.price = price;
  }
}
const newTv1 = new TV("aaa tv", 2000, "56inch");
console.log(newTv1.getPrice());
newTv1.setPrice(4000);
console.log(newTv1.getPrice());
