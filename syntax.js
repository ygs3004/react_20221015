//  let / con =>

/*
    var 키워드의 문제점
    1. 호이스팅 문제 => js 변수 선언 부분을 런타임 이전에 위로 끌어올리는 효과가 있다.
        => 변수 선언 이전에 참조하면 undefined 출력(암묵적으로 할당)

    2. 중복 선언 가능
        => 중복 선언을 오류를 발생시키지 않기 때문에 런타임 문제가 발생할 수 있다.

    3. 스코프(유효 범위) => 함수 레벨은 스코프만 지원 => 블록 레벨 스코프를 지원x
*/

console.log(num); // undefined
var num = 10;
console.log(num); // 10

var num = 100; // var 키워드는 중복 선언 허용
console.log(num); // 100

//var 키워드는 블록 레벨 스코프 지원 x
{
  var num = 1000;
}

console.log(num); // 1000

// 함수 레벨 스코프만 지원
function consoleNum() {
  var num = 10;
  console.log(num);
}

consoleNum(); // 10

/* 
    let 키워는 선언 이전에 참조시 오류가 발생
    console.log(str);
    let str = "문자열";
 */
// let 키워드 중복 선언시 오류
// let str = "문자열";
// let str = "황보석";

// let 키워드는 블록 레벨 스코프 지원
let num02 = 100;
{
  let num02 = 1000;
}
console.log(num02);

// const => constant의 줄임말로 상수라는 뜻
//       => 재할당 불가
//       => 선언과 초기화를 동시에 해야한다.
const PI = 3.14;
const TAX = 10;

// PI = 3.141;
// const NUM;

// function 키워드를 통한 함수 선언 => 호이스팅 발생
console.log(add(2, 1));
function add(a, b) {
  return a + b;
}

// console.log(sub(2, 1));
/* 
const sub = (a, b) => {
  return a - b;
};
 */
/* 
    화살표 함수(매개변수) => {} 의 형태로 작성
    1. 선언 이전에 사용 불가
    2. return 생략 가능 => {}, return 생략 => 콜백함수로 많이 사용
    3. this 바인딩 x. 
 */

const sub = (a, b) => a - b;
console.log(sub(3, 1));

const times = (a, b) => a * b;
console.log(times(3, 2));

// document.querySelector(".box").addEventListener("click", () => 1 + 2);

/* 
    비구조화 할당(디스트럭쳐링)
    let{변수명} = 객체 
    => 변수명과 같은 이름의 프로퍼티 값을 할당.

*/
let obj = {
  usernamne: "윤건수",
  age: 30,
  greeting: function () {
    console.log("안녕하세요");
  },
};

// let greeting = obj.greeting; // 참조 greeting
// let username = obj.usernamne;
// let age = obj.age;
let { usernamne: newName, greeting, age } = obj;

console.log(newName, greeting, age);

// 배열 비구조화 할당
// let [변수1, 변수2] = 배열; => 배열의 첫번째 값을 첫번째 변수에 ,두번째 값을 두번째 변수에
let arr = [
  10,
  (a, b) => {
    return a + b;
  },
];
let [num03, funcAdd] = arr;

console.log(num03);
console.log(funcAdd(5, 2));

// 스프레드 문법(펼친 문법)
// ...배열 => 배열의 각 원소를 펼치는 효과
let arr02 = [1, 2, 3, 4, 5]; // ...arr02 => 1,2,3,4,5;
console.log(...arr02);
console.log(1, 2, 3, 4, 5);
console.log(Math.max(...arr02));

let arr03 = arr02; // 참조값을 복사
console.log(arr03 === arr02); //true

let arr04 = [...arr02]; // 불변성을 지키면서 배열을 복사(완벽하지 않다.)
console.log(arr02 === arr04);

// 객체 스프레드
// let copy = obj; //{username:obj.username, age:obj.age}
// copy.age = 40;
// console.log(obj); // copy의 age를 변경했지만 obj까지 변경됨 copy===obj 이기때문

let copy = { ...obj, age: 40 };
console.log(copy);

// 비동기의 대표적인 예 : setTimeout()
// 처리 결과를 기다리지 않고 다음 코드를 실행
setTimeout(() => {
  console.log("실행");
}, 2000);

function getData(callback) {
  // 서버에서 데이터를 받아온다고 가정(2초 동안)
  let data;
  setTimeout(() => {
    callback;
  }, 2000);

  return data;
}

function double(arr) {
  return arr.map((item) => {
    item * 2;
  });
}

let data = getData(double([1, 2, 4]));
console.log(data);

function render(arr) {
  arr.forEach((item) => {
    console.log("화면에 출력 : ", item);
  });
}

// Promise : 비동기처리를 기다렸다가 실행 => 비동기를 동기처럼 처리
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolver");
    reject("에러 발생");
  }, 2000);
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    throw new Error(err);
  });

//2초 뒤에 num+1값을 resolve 하는 프로미스 반환
function render(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num + 1);
    }, 2000);
  });
}

// async/ await : 프로미스 앞에 await Promise가 resolve 될 때까지 기다린 후 다음 코드를 실행
// async 함수는 return 값을 resolve하는 Promise를 반환, "값" 을 반환
async function consoleNum(num) {
  let result = await render(num);
  result = await render(result);
  result = await render(result);

  return result;
}

async function print() {
  let result = await consoleNum(10);

  console.log(result);
}

print();
consoleNum(10).then((res) => console.log(res));

//  삼항 연산자
//  조건 ? 값1 : 값2 => 조건이 참인 경우 값1, 거짓인 경우 값2 반환
let num04 = 4;
let isEven;
if (num04 % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}

console.log(isEven);

let isOdd = num04 % 2 !== 0 ? "홀수" : "짝수";
console.log(isOdd);

// 단축 평가 : &&(and) ||(or)를 사용
// 피연산자1 && 피연산자2 => 피연산자1이 truty한 값이면 피연산자2, falsy한 값이라면 피연산자 1이 반환

let isRed = true;

function func() {
  console.log("func: ", 1);
}

let color = true && "red";
console.log(color); // "red" 반환
let color2 = false && "red";
console.log(color2); // false 반환

// 피연산자1 || 피연산자2 : 피연산자 1이 truthy한 값이면 피연산자1 아니면 피연산자2
let text = undefined || "할당";
console.log(text); // 할당
let text2 = "글씨" || "할당";
console.log(text2); // 글씨
let data1 = {
  age: 30,
  height: 30,
};
let text3 = data1 || "데이터 없음";

console.log(text3.num);
console.log(text3);

//null 병합 연산자 : 앞의 값이 null 혹은 undefined 이면 ?? 뒤의 값을 할당
let text02 = null ?? "데이터 없음";
console.log(text02);

//옵셔널 체이닝 : 앞의 참조값이 null 혹은 undefined라면 참조하지 않는다.
let user = {
  age: 30,
  height: 173,
  weight: null,
};

console.log(user.weight?.num);

// forEach , map, filter
let arr05 = [1, 2, 3, 4];

//forEach 각 원소에 대해서 콜백함수를 반환
let arrResult = arr05.forEach((num) => {
  console.log(num);
});
console.log(arrResult);
//map:각 원소에 대한 콜백함수의 리턴값을 모은 새로운 배열을 반환
let mapArr = arr05.map(function (num) {
  return num * 2;
});
console.log(mapArr);
//filter : 각 원소에 대한 콜백함수의 조건에 부합(true)하는 원소만 모아서 반환
// => 콜백함수의 return 값이 true인 경우의 원소만 모은다.
let filterArr = arr05.filter(function (num) {
  return num > 2;
});
console.log(filterArr);

// map과 filter의 콜백함수 화살표 함수로 바꾸기
let mapArrArrow = arr05.map((num) => num * 2);
console.log("mapArrArrow", mapArrArrow);
let filterArrArrow = arr05.filter((num) => num > 2);
console.log("filterArrArrow", filterArrArrow);

// userArr의 원소 중 나이가 30이상인 사람의 이름과 나이를 하나의 문자열로 만들어서 새로운 배열 만들기
// ["seok : 30, "gwanhoon:40"] 출력
// 배열 고차함수 복합적으로 사용
let userArr = [
  { username: "seok", age: 30 },
  { username: "jeoncheol", age: 29 },
  { username: "gwanhoon", age: 40 },
];

// 템플릿 리터럴 : 문자열 안에 변수값을 포함시킨다. =? ``(백틱)  안에 ${변수} 사용 => ex) `안녕하세요 ${변수} 입니다.`
// 메서드 체이닝
let filterUser = userArr
  .filter((user) => user.age >= 30)
  .map((user) => `${user.username} : ${user.age}`);
console.log(filterUser);

function returnStr() {
  return "문자열";
}

// 표현식 => 값으로 평가될 수 있는 식
let num11 = 1 + 1;
// 문 => 프로그래밍을 실행하는 최소 단위
// let num 11 = let 10 (x) 표현식 아님

// 스코프(유효 범위)
let a = 10; // 전역 변수
function outer() {
  // outer 함수의 지역 변수
  let a = 1;
  function inner() {
    // inner 함수의 지역 변수
    let a = 2;
    console.log("inner : ", a);
  }
  inner();
}

outer();

// rest 문법 : 매개변수 앞에 ...을 붙이면 매개변수의 개수와 상관없이 배열로 모은다.
//  => 매개변수의 마지막에 와야한다.
function getTotal(a, ...arr) {
  console.log(arr);
}

getTotal("문자열", "입니다.", "!!!"); // 매개변수가 배열이 아니어도 작동
