angular.module('myApp')
  .controller('ClippyCtrl', function ($window, $interval) {

    this.maxWidth = $window.innerWidth;
    this.maxHeight = $window.innerHeight;
    var self = this;
    $window.clippy.load('Clippy', function (agent) {
      // do anything with the loaded agent
      agent.show();
      // move to the given point, use animation if available
      agent.moveTo(100, 0);

      // gesture at a given point (if gesture animation is available)
      agent.speak('When all else fails, bind some paper together. My name is Clippy.');


      //$interval(agent.animate(), 5000);
      $interval(animate, 5000);

      $interval(moveClippy, 10000);

      function animate() {
        agent.animate();
      }

      function moveClippy() {
        var x = getRandomIntInclusive(self.maxWidth, self.maxHeight);
        var y = getRandomIntInclusive(self.maxWidth, self.maxHeight);
        console.log('moving to', x, y);
        agent.moveTo(x, y);
      }

      $window.onresize = function (event) {
        console.log(event);
        self.maxWidth = $window.innerWidth;
        self.maxHeight = $window.innerHeight;
      };

      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    });
  });
