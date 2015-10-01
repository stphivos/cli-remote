'use strict';

// Declare app level module which depends on views, and components
angular.module('CliRemoteApp', [
    'ngRoute',
    'ngAnimate',
    'ngResource',
    'ngCookies',
    //'ui.router',
    'ui.bootstrap',
    'CliRemoteApp.command',
    //'CliRemoteApp.view2',
    'CliRemoteApp.version',
    'CliRemoteApp.cli'
]).
    config(['$routeProvider', '$locationProvider', '$resourceProvider', '$modalProvider',
        function ($routeProvider, $locationProvider, $resourceProvider, $modalProvider) {
            $routeProvider.otherwise({redirectTo: '/'});
            $locationProvider.html5Mode(true);
            $resourceProvider.defaults.stripTrailingSlashes = false;
            $modalProvider.options.animation = false;
        }]);
