/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../modules/race/race.ts" />
'use strict';
angular.module('letsraceTypescriptApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'MainModule',
    'RaceModule'
]).config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'modules/main/main.html',
        controller: 'MainViewCtrl'
    }).when('race', {
        templateUrl: 'modules/race/race.html',
        controller: 'RaceViewCtrl'
    }).otherwise({
        redirectTo: '/'
    });
});
//# sourceMappingURL=app.js.map