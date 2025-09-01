// デバッグコマンド
// console.log('Hello World!');

// データ型を見る時はtypeof
// let one = '1';
// let two = 2;

// console.log('one →', typeof one, one); // one → string 1
// console.log('two →', typeof two, two); // one → number 2

// let text = 'JavaScriptの練習';
// text = 'JavaScriptをマスターした';
// console.log(text);
// let names = ['John', 'Bob', 'Michael', 'Emma'];
// console.log(names);
// console.log('names[0] => ', names[0]);
// console.log('names[1] => ', names[1]);
// console.log('names[2] => ', names[2]);
// console.log('names[3] => ', names[3]);
// console.log('names.length => ', names.length);

if (true) {
  console.log('trueです！');
}
console.log('処理が終わりました');

let userA = '到着';
let userB = '到着';

if (userA === '到着' && userB === '到着') {
  console.log('全員揃ったので出発します。');
} else {
  console.log('揃っていないため、出発できません。');
}

// 三項演算子
// 条件式 ? trueの時の処理 : falseの時の処理
let errMsg = '';
errMsg === '' ? console.log('ない！') : console.log('ある！');

// 変数代入時に三項演算子を使う事もある
let number = 1;

// numberを2で割った時
// 割り切れたら「偶数です」、割り切れなかったら「奇数です」
// という文字列をtextに代入する
let text = number % 2 === 0 ? '偶数です' : '奇数です';
console.log(text);

// false判定される値は以下
// false
// undefind
// null
// 0
// ''（空文字）

// for文
// for (初期値; 繰り返しの条件式; 処理の後にされる式) {
//   // ここに繰り返す処理を書きます。
// }

for (let i = 0; i < 10; i++) {
  console.log(i + '回目のコンソール');
}
