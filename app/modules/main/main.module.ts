/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../interface/interface.module.ts" />

'use strict';

((): void=> {
  angular.module("MainModule", [
    'LetsRace.RestModule'
  ]);
})()

module MainModule {

  export class MainController {

    races: Array<LetsRace.InterfaceModule.IModel>;

    static $inject = ["LetsRace.RestModule.Race"];
    constructor(private race: LetsRace.InterfaceModule.IRace) {
      this.race= race;
    }

    getRaces = () => {
      //this.race.get();
      var self = this;
      this.race.list({}).then(function successCallback(response) {
        self.races = response ;
        console.log(self.races);
      }, function errorCallback(response) {
        console.log(response);
      });;

      console.log(this.races);
    }
  }

  angular.module("MainModule").
    controller("MainModule.MainController", MainController);
}
