/// <reference path="../../../typings/angularjs/angular.d.ts" />
'use strict';
(function () {
    angular.module("LetsRace.RaceModule", []);
})();
var LetsRace;
(function (LetsRace) {
    var RaceModule;
    (function (RaceModule) {
        var RaceController = (function () {
            function RaceController($scope) {
                this.$scope = $scope;
                $scope.awesomeThings = [
                    'HTML5 Boilerplate',
                    'AngularJS',
                    'Karma'
                ];
            }
            return RaceController;
        })();
        RaceModule.RaceController = RaceController;
        angular.module('LetsRace.RaceModule').controller('RaceController', RaceController);
    })(RaceModule = LetsRace.RaceModule || (LetsRace.RaceModule = {}));
})(LetsRace || (LetsRace = {}));
//# sourceMappingURL=race.module.js.map