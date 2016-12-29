/* Controllers */
twjApp.controller('postCtrl', ['$scope', '$routeParams', 'Posts', function($scope, $routeParams, Posts) {
    $scope.post = Posts.get({postId: $routeParams.postId}, function(post){
        console.log("Success?!?!?");
    });
}]);

twjApp.controller('tempCtrl', ['$scope', function($scope) {
    $scope.message = 'Sup Bitch';
}]);

twjApp.controller('blogCtrl', ['$scope', 'Posts', function($scope, Posts) {
    $scope.posts = Posts.query();
}]);