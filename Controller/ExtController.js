function myController($scope) {
    $scope.Addition = function () {
        $scope.result = parseInt($scope.Number1) + parseInt($scope.Number2);
    };
}