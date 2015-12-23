/**
 * Created by luis on 12/19/15.
 */
/// <reference path="../app.ts" />
'use strict';
angular.module('MainModule', []);
var MainModule;
(function (MainModule) {
    var MainViewCtrl = (function () {
        function MainViewCtrl($scope) {
            this.$scope = $scope;
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        }
        return MainViewCtrl;
    })();
    MainModule.MainViewCtrl = MainViewCtrl;
})(MainModule || (MainModule = {}));
angular.module('MainModule').controller('MainViewCtrl', MainModule.MainViewCtrl);
//# sourceMappingURL=main.js.map