/// <reference path="../app.ts" />
'use strict';
angular.module('RaceModule', []);
var RaceModule;
(function (RaceModule) {
    var RaceViewCtrl = (function () {
        function RaceViewCtrl($scope) {
            this.$scope = $scope;
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        }
        return RaceViewCtrl;
    })();
    RaceModule.RaceViewCtrl = RaceViewCtrl;
})(RaceModule || (RaceModule = {}));
angular.module('RaceModule').controller('RaceViewCtrl', RaceModule.RaceViewCtrl);
//# sourceMappingURL=race.js.map