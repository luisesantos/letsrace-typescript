/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/angularjs/angular-route.d.ts" />
var letsraceTypescriptApp;
(function (letsraceTypescriptApp) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
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
        };
        Routes.$inject = ["$routeProvider"];
        return Routes;
    })();
    letsraceTypescriptApp.Routes = Routes;
})(letsraceTypescriptApp || (letsraceTypescriptApp = {}));
//# sourceMappingURL=app.routes.js.map