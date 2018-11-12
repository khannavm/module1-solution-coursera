(function () {
'use strict';

var app = angular.module('LunchCheck', []);
app.controller('LunchCheckController', function($injector, $scope) {



  $scope.dishes ='';

  $scope.callme =function(){
    console.log('you clicked me ');
  }
  $scope.checkDishes = function () {
    var num = countDishes($scope.dishes)
    $scope.message = displayMessage(num);
  }

  function countDishes(dishes) {
    var count = 0;
    if (dishes) {
      var array = dishes.split(',');
      for (var idx in array) {
        if (array[idx].trim().length !=0) {
          count++;
        }
      }
    }
    return count
  }

  function displayMessage(num) {
    if (num === 0) {
      return 'Please enter data first';
    }
    else if (num>0 && num <=3) {
      return 'Enjoy!';
    }
    else {
      return 'Too Much!';
    }

  }


});
})();
