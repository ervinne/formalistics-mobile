
var HomeCtrl = function ($scope, PortalPostsAPI) {
    console.log("Home Controller");
    PortalPostsAPI.allPost()
        .then(function (data) {

            $scope.posts = data.results;
            console.log("Post object ", $scope.posts);

        }, function (error) {
            console.error(error);
        });
};