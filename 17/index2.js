//      클래스
//      -> 객체 생성 템플릿 => 객체를 만들기 위해 사용

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

//      class가 없던 시절

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

//      class 등장 = 일종의 작업 지시서
class TV {
  constructor(name, price, size) {
    //this : 여기 클래스 안에 있는 속성
    //this.name : 이 클래스 안에 있는 name!
    this.name = name;
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

//      하위클래스
class Product {
  name = "";
  price = 0;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price + "만원";
  }
}

//      상속 : 부모클래스(product)로부터 변수(method)를 가져와서(Laptop) 사용하는 개념.
class Laptop extends Product {
  weight = "";

  constructor(name, price, weight) {
    //상속받은 부모 클래스 값을 불러온다.
    super(name, price);
    this.weight = weight;
  }
}

let laptop = new Laptop("삼성tv", 5000, "55");

console.log(laptop.price);
console.log(laptop.getPrice());

//      부모클래스는 자식클래스의 값을 사용하지 못한다.
let parent = new Product("tv", 1000);
console.log(parent.weight);

class AAA{
  
}