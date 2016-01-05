
var LoginCtrl = function ($scope, $state, $timeout) {

    $scope.loginData = {};
    $scope.loggingIn = false;

    $scope.login = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
            $state.go('tab.home');
            $scope.loggingIn = false;
        }, 5000);

        $scope.loggingIn = true;
    };


};
