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
twjApp.controller('formCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("formCtrl!");

    // Declarations
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

twjApp.controller('tempCtrl', ['$scope', function($scope, Posts) {
    console.log("tempCtrl");
}]);

twjApp.controller('loadingCtrl', ['$scope', function($scope) {
    console.log("loadingCtrl");

    // End Loading animation and render the page 
    var body = angular.element(document.querySelector("body"));
    body.addClass('loaded');

    $scope.loaded='true';
}]);