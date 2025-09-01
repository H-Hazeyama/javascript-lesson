// Q1 変数
let nickname = '櫨山';
let age = '25';

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');


// Q2 配列
let langueges = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let templateText = `私の好きな言語は${langueges[0]}です。次は${langueges[3]}を勉強してみたいです。`

console.log(templateText);


// Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);


// Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);


// Q5 四則演算
let avarageAge = (playerList[0].age + playerList[1].age + playerList[2].age) / 3;

console.log(avarageAge);


// Q6 関数
function sayHello() {
    console.log('Hello');
}
sayHello();

const sayWorld = function() {
    console.log('World');
}
sayWorld();


// Q7 メソッド
user.birthday = '2000-09-27';
user.sayHello = function() {
    console.log('Hello！');
};
user.sayHello();


