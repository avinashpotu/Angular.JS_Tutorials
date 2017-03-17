appX.controller("CustControllerX", function ($scope) {
    alert('In Customer Controller');
    $scope.GetTotalPrice = function (cust) {
        debugger;
        $scope.TotalAmount = parseInt(cust.itemQuantity) * parseInt(cust.itemPrice);
    }
});