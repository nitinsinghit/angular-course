var str = 'some string';
var num = 10;
var num2 = 10.1;
var arr = ['one', 'two', 'three'];
var obj = {
  one: 1,
  two: 2,
  three: 3
};

function add (a,b, callback) {
  setTimeout(function () {
    callback(a+b);
  }, 3000);
}

add(3,5, function (result) {
  console.log(result);
});
