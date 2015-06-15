'use strict';

// Modules 
var twjApp = angular.module('twjApp', ['ngRoute']);

twjApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'partials/home.html',
            controller  : 'tempCtrl'
        })
        .when('/blog', {
            templateUrl : 'partials/blog.html',
            controller  : 'blogCtrl'
        })
        .when('/blog/:postId', {
            templateUrl : 'partials/post.html',
            controller  : 'postCtrl'
        }).
      	otherwise({
        	redirectTo: '/'
		});
});

/* Controllers */
twjApp.controller('postCtrl', ['$scope', '$routeParams', 'Posts', function($scope, $routeParams, Posts) {
    $scope.post = Posts.get({postId: $routeParams.postId}, function(post){
        console.log("Success?!?!?");
    });
}]);

twjApp.controller('tempCtrl', ['$scope', function($scope) {
    console.log("RIGHT CONTROLLER");
    $scope.message = 'Sup Bitch';
}]);

twjApp.controller('blogCtrl', ['$scope', 'Posts', function($scope, Posts) {
    console.log("WHY");
    $scope.posts = Posts.query();
}]);