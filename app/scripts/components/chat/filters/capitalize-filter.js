/**
 * Created by Matthew.Ghen on 8/3/16.
 */

angular.module('myAppChat')
  .filter('capitalize', function () {
    function capWord(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }

    return function (input, isEveryWord) {
      return (!input) ? '' : (!isEveryWord) ? capWord(input) : input.replace(/([^\W_]+[^\s-]*) */g, capWord);
    };
  });
