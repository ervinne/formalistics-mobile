
var FormsCtrl = function ($scope, FormsAPI) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    FormsAPI.allForms()

        .then(function (data) {

            $scope.forms = data.form_category;
            console.log("Form objects ", $scope.forms, "form id", $scope.whichData);

        }, function (error) {

            console.error(error);

        });

};