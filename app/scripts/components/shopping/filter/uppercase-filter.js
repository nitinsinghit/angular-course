/**
 * @description available filter in our `myAppShopping` module
 */
angular.module('myAppShopping')
  .filter('MakeUppercase', function () {
    // function that's invoked each time Angular runs $digest()
    // pass in `item` which is the single Object we'll manipulate
    return function (item) {
      var i, j, arr
      if (typeof item === 'string') {
        // If String
        arr = item.split(' ');
        if (arr.length > 0) {
          // If Sentence
          for (i = 0; i < arr.length; i++) {
            arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
          }
          item = arr.join(' ');
        } else {
          // If word
          item = item.replace(item[0], item[0].toUpperCase());
        }

      } else {
        //If Array of String
        for (i = 0; i < item.length; i++) {
          arr = item[i].split(' ');
          for (j = 0; j < arr.length; j++) {
            arr[j] = arr[j].replace(arr[j][0], arr[j][0].toUpperCase());
          }
          arr = arr.join(' ');
          item[i] = arr;
        }
      }
      return item;
    };
  });

