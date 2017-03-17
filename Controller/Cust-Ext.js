spaApp.controller("myCustomerController", function ($scope) {
    $scope.FetchCustomers = function () {
        debugger;
        $scope.FULLNAME = $scope.CustomerName + "    " + $scope.CustomerMobile;
    }
});
