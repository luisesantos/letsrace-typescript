/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />

module letsraceTypescriptApp {
  export class Routes {

    static $inject = ["$routeProvider"];

    static configureRoutes($routeProvider: ng.route.IRouteProvider) {

     /* $routeProvider.when("/", {
        controller: "letsraceTypescriptApp.controllers.tsDemoController",
        templateUrl: "/app/views/playlist.html",
        controllerAs: "playList"
      });*/

      $routeProvider.when("/main", {
        controller: "MainModule.MainController",
        templateUrl: "/modules/main/main.html",
        controllerAs: "mainController"
      });

      //$routeProvider.otherwise({ redirectTo: "/main" });
    }
  }
}
