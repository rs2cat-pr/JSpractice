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
//変数に名前がないとundefinedになる
//引数にデフォルト値を追加
const sayHello = (user = "名前未入力さん") => console.log(`こんにちは${user}`);
//sayHello();

/**
 * スプレッド構文 ...
 * 配列とかで使用できる
 */
//* 配列
const arr1 = [1, 2];
//配列の中身を順番に展開してくれる
// (any,any,...)の形
//console.log(...arr1);

const sumFunc1 = (num1, num2) => {
  return console.log(num1 + num2);
};
//sumFunc1(...arr1);

//* 配列の分割代入
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
//分割代入と組み合わせて一部を再配列化することができる
//console.log(num1)
//console.log(arr3)

//* 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
arr6[0] = 100;
const arr7 = [...arr6, ...arr5];
//console.log(arr7)

// arr6 = arr4を行うと、arr6[]をいじった時にarr4まで変更される
// 参照元と依存関係を断つためにスプレッド構文を用いる

/**
 * map・filterを使用した配列の処理
 */
/**　map 配列を展開*/
// const nameArr1 = ["田中", "鈴木", "山田"];
// //従来　for文を使った展開
// for (let index = 0; index < nameArr1.length; index++) {
//   console.log(`${index + 1}番目は${nameArr1[index]}`);
// }

// //mapは配列に対して使用できる関数
// //mapを使用してnameArr２にnameArr1の値を再配列化
// const nameArr2 = nameArr1.map((name) => {
//   return name;
// });
// console.log(nameArr2)
//配列の内容を展開して、出力
// nameArr2.map((name, index) => console.log(`${index + 1}は${name}`));

// /**　filter 検索条件を指定して条件に一致する配列を展開*/
// const numArr = [1, 2, 3, 4, 5];
// const numArr2 = numArr.filter((num) => {
//   //returnに条件式を書く
//   return num % 2 === 1;
// });
// console.log(numArr2);

// const nameArr3 = nameArr1.map((name) => {
//   if (name === "山田") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(nameArr3);

/**
 * 三項演算子
 * ある条件　　？　　　A　　：　　B
 */

const value = 1 > 0 ? "true" : "false";
//console.log(value);

const number1 = 1300;
//console.log(number1.toLocaleString(number1));
//数値が来た場合、三桁区切りにする

const formattedNum =
  typeof number1 === "number"
    ? number1.toLocaleString
    : "数値型を入力してください";
//console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};
//console.log(checkSum(50,60))

/**
 * 論理演算子
 * && ||
 */
const flag1 = "true";
const flag2 = "faise";

// if(flag1 || flag2){
//   console.log('または')
// }
// if(flag1 && flag2){
//   console.log('かつ')
// }

// ||の右側がfalseの時、左側を返すの意味
const fee1 = null; //nullはfalse判定
const fee2 = fee1 || "金額未設定";
console.log(fee2);

//　＆＆の左側がtrueの時、右側を返す
const fee3 = 100; //数値はtrue判定
const answer = fee3 && "何か設定されたよ";
console.log(answer);
