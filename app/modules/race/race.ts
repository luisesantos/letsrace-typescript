/// <reference path="../app.ts" />

'use strict';

angular.module('RaceModule', []);

module RaceModule {
  export interface IRaceViewScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class RaceViewCtrl {

    constructor (private $scope: IRaceViewScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('RaceModule')
  .controller('RaceViewCtrl', RaceModule.RaceViewCtrl);

