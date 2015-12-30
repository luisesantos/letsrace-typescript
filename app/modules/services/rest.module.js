/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../interface/interface.module.ts" />
(function () {
    angular.module("LetsRace.RestModule", [
        'LetsRace.InterfaceModule'
    ]);
})();
var LetsRace;
(function (LetsRace) {
    var RestModule;
    (function (RestModule) {
        var Race = (function () {
            function Race($http) {
                this.name = "";
                this.description = "";
                this.url = "http://localhost:8000/races/?format=json";
                this.httpService = $http;
            }
            Race.prototype.list = function (params) {
                var _this = this;
                var result = this.httpService.get(this.url, params).then(function (response) { return _this.handlerResponded(response, params); });
                return result;
            };
            Race.prototype.get = function () {
                console.log('Error: Not Implemented Yet');
                return;
            };
            Race.prototype.save = function () {
                console.log('Error: Not Implemented Yet');
                return;
            };
            Race.prototype.update = function () {
                console.log('Error: Not Implemented Yet');
                return;
            };
            Race.prototype.destroy = function () {
                console.log('Error: Not Implemented Yet');
                return;
            };
            Race.prototype.handlerResponded = function (response, params) {
                return response.data;
            };
            return Race;
        })();
        RestModule.Race = Race;
        angular.module("LetsRace.RestModule").service("LetsRace.RestModule.Race", Race);
    })(RestModule = LetsRace.RestModule || (LetsRace.RestModule = {}));
})(LetsRace || (LetsRace = {}));
//# sourceMappingURL=rest.module.js.map