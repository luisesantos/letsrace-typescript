/// <reference path="../../../typings/angularjs/angular.d.ts" />
'use strict';


((): void=> {
  angular.module("LetsRace.RaceModule", []);
})()

module LetsRace.RaceModule {

  export interface IRaceViewScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class RaceController {

    constructor (private $scope: IRaceViewScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }

  angular.module('LetsRace.RaceModule')
    .controller('RaceController', RaceController);
}



