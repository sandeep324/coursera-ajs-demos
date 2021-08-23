(function () {

  angular.module("NameCalculatorModule", [])
  .controller("NameCalculatorController", function ($scope) {
    $scope.name = "";
    $scope.score = 0;
    $scope.calculateNameScore = function() {
      console.log("inside fucntion");
      var nameScore = findScore($scope.name);
      $scope.score = nameScore;
    }
    function findScore(name) {
      var totalNameValue = 0;
      for (var i = 0; i < name.length; i++) {
        totalNameValue += name.charCodeAt(i);
      }
      return totalNameValue;

    }
  });
})();
