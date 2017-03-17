app.controller("Ctrl1", function ($scope) {
    $scope.Message = "Welcome to Module";

    $scope.GetArea = function () {
        $scope.TotalArea = parseFloat($scope.length) * parseFloat($scope.breadth);
    }
});