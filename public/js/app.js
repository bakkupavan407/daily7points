var app = angular.module('D7P', ['ui.router', 'serviceModule', 'controllerModule', 'constantsModule']);
app.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: '../views/home.html',
            controller: 'homeController'
        })
        .state('/whatwedo', {
            url: '/whatwedo',
            templateUrl: '../views/whatwedo.html',
            controller: 'whatwedoController'
        })
        .state('/blog', {
            url: '/blog',
            templateUrl: '../views/blog.html',
            controller: 'blogController'
        })
        .state('/login', {
            url: '/login',
            templateUrl: '../views/login.html',
            controller: 'loginController'
        })
        .state('/dashboard', {
            url: '/dashboard',
            templateUrl: '../views/dashboard.html',
            controller: 'dashboardController'
        })

    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
});
app.controller('myCtrl', ['$scope', function($scope) {

}]);
var controllerModule = angular.module('controllerModule', []);
var serviceModule = angular.module('serviceModule', []);
var constantsModule = angular.module('constantsModule', []);