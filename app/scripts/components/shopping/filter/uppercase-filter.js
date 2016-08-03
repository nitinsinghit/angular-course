/**
 * @description available filter in our `myAppShopping` module
 */
angular.module('myAppShopping')
  .filter('MakeUppercase', function () {
    // function that's invoked each time Angular runs $digest()
    // pass in `item` which is the single Object we'll manipulate
    return function (item) {
      var i, j, arr;
      if (typeof item === 'string') {
        return titeCase(item)
      } else {
        for (i = 0; i < item.length; i++) {
          item[i] = titeCase(item[i]);
        }
      }
      return item;
    };
  });

function titeCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
}

