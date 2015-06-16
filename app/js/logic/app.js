'use strict';

// Modules 
var twjApp = angular.module('twjApp', ['ngRoute']);

twjApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'partials/home.html',
            controller  : 'formCtrl'
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

twjApp.controller('formCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.button = "Send Message";
    $scope.formData = {};

    // process the form
    $scope.processForm = function() {
        $scope.button = "Sending...";
        console.log($scope.formData.name + ", " + $scope.formData.email  + ", " + $scope.formData.phone  + ", " + $scope.formData.text);
        $http({
            url: "/send", 
            method: "GET",
            params: {
                name: $scope.formData.name,
                email: $scope.formData.email,
                phone: $scope.formData.phone,
                message: $scope.formData.text
            }
        })
        .success(function(data) {
            console.log("Succefully returned Data: " + data);
            $scope.button = "Sent!";
        })
        .error(function(data){
            console.log("Error sending the email: " + data);
            $scope.message = "Error sending the message. Email us directly at trippinwithjamie@gmail.com";
            $scope.button = "Error!";
        });
    };
}]);

twjApp.controller('blogCtrl', ['$scope', 'Posts', function($scope, Posts) {
    console.log("WHY");
    $scope.posts = Posts.query();
}]);