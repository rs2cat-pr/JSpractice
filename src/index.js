/**
 * const,let
 */

//上書き・再宣言可
var val1 = "a";

//上書き可能・再宣言不可
let val2 = "b";

//上書き不可・再宣言不可
//オブジェクトのプロパティの上書き可
//配列のアイテムの上書き可
const val3 = "c";

/**
 * テンプレート文字列
 */
const message1 = `${val1} と ${val2} と ${val3}`;

/**
 * アロー関数
 */

//従来
const func1 = function func1(str) {
  return str;
};
//console.log(func1("従来の出力"));

//アロー関数
//引数が1つの時は()なしでも可
const func2 = (str) => {
  //中の処理が単一式なら{return --}は不要
  return str;
};
//onsole.log(func2("アロー関数"));

const func3 = (num1, num2) => num1 + num2;
//console.log(func3(10, 20));

/**
 * 分割代入
 */

const myProfile = {
  name: "名前",
  age: 25
};
//従来
const profile1 = `私の名前は${myProfile.name}で年齢は${myProfile.age}です`;
//console.log(profile1);

//分割代入
//List
const { name, age } = myProfile;
const profile2 = `私の名前は${name}で年齢は${age}です`;
//console.log(profile2);
//配列
const myProfile2 = ["名前２", "28"];
const { name2, age2 } = myProfile2;
const profile3 = `私の名前は${name2}で年齢は${age2}です`;
//console.log(profile3);

/**
 * デフォルト値、引数
 */
const sayHello = (user = "名前未入力さん") => console.log(`こんにちは${user}`);
sayHello();

//変数に名前がないとundefinedになる
