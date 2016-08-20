'use strict';

/**
 * @ngdoc function
 * @name myAppCarousel.controller:CarouselCtrl
 * @description
 * # Controller for the carousel page
 */

angular.module('myAppCarousel')
.controller('CarouselCtrl', function ($scope){
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = [
        {
            image: 'images/aowp.png',
            id: 0
        },
        {
            image: 'images/sheep.png',
            id: 1
        },
        {
            image: 'images/beer.png',
            id: 2
        },
        {
            image: 'images/pierre.png',
            id: 3
        }
    ];
});