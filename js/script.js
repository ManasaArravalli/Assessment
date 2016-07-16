 var app = angular.module('myApp', []);
 app.controller('myCtrl', function($scope) {
    $scope.positiveArr = [];
    $scope.nagativeArr = [];
     // add term to type of array its 
     $scope.addTerm = function() {
        if ($scope.type === 'Positive') {
         $scope.positiveArr.push($scope.term);
     } else {

        $scope.nagativeArr.push($scope.term);
    }
    $scope.clearForm();
};

     // remove element form positive array 
     $scope.removePosType = function(val) {
        var index = $scope.positiveArr.indexOf(val);
        $scope.positiveArr.splice(index, 1);
        $scope.clearForm();
    };

     // remove element form negative array 
     $scope.removeNagType = function(val) {
        var index = $scope.nagativeArr.indexOf(val);
        $scope.nagativeArr.splice(index, 1);
        $scope.clearForm();
    };

    $scope.editFormPos = function(pos) {
        $scope.term = pos;
        $scope.type = 'Positive';

    };

    $scope.editFormNag = function(nag) {
        $scope.term = nag;
        $scope.type = 'Negitive';

    };

    $scope.clearForm = function() {
     $scope.term = "";
     $scope.type = '';
 };

});