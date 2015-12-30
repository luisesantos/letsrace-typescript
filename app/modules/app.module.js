/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
/// <reference path="../modules/race/race.module.ts" />
/// <reference path="app.routes.ts" />
'use strict';
(function () {
    var app = angular.module("letsraceTypescriptApp", [
        'ngAnimate',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'MainModule',
        'LetsRace.RaceModule'
    ]);
    app.config(letsraceTypescriptApp.Routes.configureRoutes);
})();
//# sourceMappingURL=app.module.js.map