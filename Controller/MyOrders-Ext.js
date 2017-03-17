spaApp.controller("myOrdersController", function ($scope) {
    $scope.Calculate = function () {
        $scope.TotalPrice = parseInt($scope.Quantity) * parseInt($scope.Cost);
    } 
});
