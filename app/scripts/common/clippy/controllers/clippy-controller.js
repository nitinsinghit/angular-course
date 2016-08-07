angular.module('myApp')
  .controller('ClippyCtrl', function ($window, $interval, $scope) {

    this.maxWidth = $window.innerWidth;
    this.maxHeight = $window.innerHeight;
    var self = this;
    $scope.characters = [
      'Bonzi',
      'F1',
      'Genie',
      'Genius',
      'Links',
      'Merlin',
      'Peedy',
      'Rocky',
      'Rover'
    ];
    $scope.activate = function (Character) {
      $window.clippy.load(Character, function (agent) {
        // do anything with the loaded agent
        agent.show();
        // move to the given point, use animation if available

        moveCharacter ();
        //$interval(agent.animate(), 5000);
        $interval(animate, 5000);

        $interval(gesture, 6000);

        $interval(moveCharacter, 10000);

        function animate() {
          agent.animate();
        }

        function gesture () {
          agent.gestureAt(200,200);
        }

        function speak() {
          //agent.speak('You can\'t destroy me!');
        }

        function moveCharacter() {
          var x = getRandomIntInclusive(0, self.maxWidth);
          var y = getRandomIntInclusive(0, self.maxHeight);
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
    };

  });
