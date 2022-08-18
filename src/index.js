/**
 * learn about const and let 変数宣言
 */

// var value = "hello";
// console.log(value);

// 上書きできる
// value = "this is wrong";
// console.log(value);

// 再宣言できる
// var value = "this is second var";
// console.log(value);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let上書き";
// console.log(val2);

// //letは再宣言ができない
// let val2 = "let際宣言"; //ここでエラー出る

/**
 * constは上書きできない
 */
// const val3 = "const変数";
// console.log(val3);

// //オブジェクトを作成
// const val4 = {
//   name: "じゃけ",
//   age: 28,
// }

// //上書きできる
// val4.name = "jak"
// //上書きできる
// val4.address = "Hiroshima"

// //オブジェクトを作成する　ときは基本的にconstを使う

// console.log(val4)

// // array
// const val5 = ["dog", "cat"]

// // 上書きできる
// val5[0] = "giraffe"

// //arrayに新しく追加
// val5.push("monkey")
// console.log(val5)

/**
 * テンプレート文字列
 */

// const name = "じゃけ";
// const age = 28;

// // 「私の名前はじゃけです。年齢は28歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1)
// //これだと長いしめんどくさい

// //テンプレート使用

// const message2 = `私の名前は${name}です。年齢は${age}ですか。`;
// console.log(message2)

/**
 * アロー関数
 */

//普通に関数作成
//  function func1(str) {
//    return str;
//  }

// constを使った関数宣言
// const func1 = function(str) {
//   return str;
// }
//  console.log(func1("this is func1"))

// //　アロー関数を使用した関数宣言
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("this is func2"))

// //かっこを初略することもできる
// const func21 = str => {
//   return str;
// }
// console.log(func21("this is func21"))

// //波かっこも省略できる
// const func22 = str => str
// console.log(func22("this is func22"))

// const func3 = (num1, num2) => num1 + num2
// console.log(func3(10, 20))

/**
 *  分割代入
 */

// const myProfile = {
//   name: "じゃけ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(message1)

// //分割代入をする
// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`
// console.log(message2)

// // array でもできる
// const myProfileArray = ["じゃけえ", 20]
// const [nameFromArray, ageFromArray] = myProfileArray;
// const message3 = `名前は${nameFromArray}です。年齢は${ageFromArray}です。`
// console.log(message3)

/**
 * デフォルト値、引数など
 */

//  const sayHello = (name) => console.log(`こんにちは！${name}さん！`)
// sayHello();
// //↑が設定されていない場合、undefinedと設定される

// const sayHello2 = (name = "kaisei") => console.log(`こんにちは！${name}さん！`)
// sayHello2();
// //　name = "kaisei"と書くことによってデフォルトを設定できる

/**
 * スプレッド構文 ...
 */

//  //　配列の展開
//  const array1 = [1, 2, 3]
//  console.log(...array1)
// // 順番に1, 2 を出力してくれる
// // stream文みたいな感じ

// const sumFunc = (num1, num2) => console.log(num1 + num2)
// sumFunc(...array1)
// // スプレッド構文を使うことでふたつ　できる

// //まとめることもできちゃう
// const array2 = [1,2,3,4,5]
// const [num1, num2, ...array3] = array2

// console.log(array3)

// // //配列のコピー、結合
// const array4 = [10, 20]
// const array5 = [30, 40]

// const array6 = [...array4, ...array5]

// array6[0] = 100

// console.log(array6)
// console.log(array4)

// // 注意：　＝を使ってもいいけど100を入れるとarray4にも影響してしまうためダメ
// const array8 = array4;
// array8[0] = 100;
// console.log(array8)

/**
 * mapやfilterを使った配列の処理
 */

//  //従来のやり方
//  const nameArr = ["田中", "山田", "じゃけ"];
//  for (let index = 0; index < nameArr.length; index++) {
//    console.log(`${index+ 1}番目は${nameArr[index]}です`)
//  }

// // mapを使用する場合
//  const nameArr2 = nameArr.map((name) => {
//    return name;
//  })

//  //スプレッド構文を使用する場合
//  const nameArr3 = [...nameArr]

//  //　出力は同じ
//  console.log(nameArr3)

//  nameArr.map((name, index) => console.log(`${index + 1}番目は${name}`))

// //filterを使う
// const numArr = [1, 2, 3, 4, 5];
// //奇数のみをfilter
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })

// console.log(newNumArr)

// const newNameArr2 = nameArr.map((name) => {
//   if (name === "じゃけ") {
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr2)

/**
 * 三項演算子
 */

// ある条件 ?: 条件がtrueの時 : 条件がfalseの時

//  const val1 = 1 > 0 ? `trueです` : `falseです`;

//  console.log(val1)

// const num = 1300;
// console.log(num.toLocaleString())

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : `数値を入力してください`
// console.log(formattedNum)

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : `OK`
// }
// console.log(checkSum(100, 1))

/**
 * 論理演算子の本当の意味を知ろう　&& ||
 */

const flag1 = true;
const flag2 = true;

if (flag1 || flag2) {
  console.log("1か2はtrueです");
}

if (flag1 && flag2) {
  console.log("1と2はtrueです");
}

// || の左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "全額未設定です";
// console.log(fee)

// && は左側がtrueなら右側が返される
const num2 = null;
const fee2 = num2 && "何かが設定されました";
console.log(fee2);
