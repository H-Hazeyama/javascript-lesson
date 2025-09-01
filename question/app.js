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


// Q8 引数
let calc = {};

calc.add = function(x, y) {
    console.log(x + y);
};
calc.add(2,5);

calc.subtract = function(x, y) {
    console.log(x - y);
};
calc.subtract(11,1);

calc.multiply = function(x, y) {
    console.log(x * y);
};
calc.multiply(7, 7);

calc.divide = function(x, y) {
    console.log(x / y);
};
calc.divide(10, 2);


// Q9 返り値
function remainder(x, y) {
    return x % y;
}
console.log('5 を 3 で割った余りは ' + remainder(5, 3) + ' です。');


// Q10 スコープ

// function foo() {
//   let x = 1;
// }
// console.log(x);

// 上記の関数実行時にエラーが出るのは「console.log()」の引数にスコープ外の変数を指定しているためです。
// 変数xは関数foo内で宣言されているためそれが有効となるスコープの範囲も関数内とされます。
// しかし現在その範囲外であるconsole.log()が変数xを参照しようとしている状態であり、
// console.log()は変数xを見つけられないためエラーが出ているという認識です。
// もし修正する場合はconsole.log()を関数内に組み込んで、関数fooを実行することで変数xの値がコンソールに出力されると考えます。
