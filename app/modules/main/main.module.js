/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../interface/interface.module.ts" />
'use strict';
(function () {
    angular.module("MainModule", [
        'LetsRace.RestModule'
    ]);
})();
var MainModule;
(function (MainModule) {
    var MainController = (function () {
        function MainController(race) {
            var _this = this;
            this.race = race;
            this.getRaces = function () {
                //this.race.get();
                var self = _this;
                _this.race.list({}).then(function successCallback(response) {
                    self.races = response;
                    console.log(self.races);
                }, function errorCallback(response) {
                    console.log(response);
                });
                ;
                console.log(_this.races);
            };
            this.race = race;
        }
        MainController.$inject = ["LetsRace.RestModule.Race"];
        return MainController;
    })();
    MainModule.MainController = MainController;
    angular.module("MainModule").controller("MainModule.MainController", MainController);
})(MainModule || (MainModule = {}));
//# sourceMappingURL=main.module.js.map