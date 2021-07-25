function Test001() {
  let n = 0;
  const count = function () {
    n++;
    return n;
  };
  console.log(count()); // 1
  console.log(count()); // 2
  console.log(n); //2
}
//console.log("Test001");
//Test001();

function Test002() {
  var n = 0;
  function parent() {
    var n = 0;
    const count = function () {
      return ++n;
    };
    return count;
  }
  var result = parent();
  console.log(result()); // 1
  console.log(result()); // 2
  console.log(n); // 0
}

//Test002();

//https://techacademy.jp/magazine/27928

function Test003() {
  var makePlayer = function () {
    var money = 0;
    return {
      addMoney: function (a) {
        console.log("test");
        money += a;
      },
      getMoney: function () {
        return money;
      }
    };
  };
  var yamada = makePlayer();

  yamada.addMoney(5);
  console.log(yamada.getMoney());
}

//Test003();

//https://www.sejuku.net/blog/25026

function Test004() {
  var createTimer = function () {
    var time = 10;

    return function timeDown() {
      time -= 1;
      console.log(time);
    };
  };

  let timer = createTimer();
  timer();
  timer();
  timer();
  timer();
}

//Test004();

//クロージャの例の場合、実行結果として9,8,7とtimer()が呼ばれるたびに結果が
//変わっているのがわかりますね。
//これは、関数（createTimer()）の中で定義された変数（time）と関数（timeDown()）の結果が、
//セットで保存されているためです。
//この、セットで保存されるという現象そのものがクロージャです。

function init() {
  var name = "Mozilla"; // name は、init が作成するローカル変数

  function displayName() {
    // displayName() は内部に閉じた関数
    console.log(name); // 親関数で宣言された変数を使用
  }
  displayName();
}
init();
