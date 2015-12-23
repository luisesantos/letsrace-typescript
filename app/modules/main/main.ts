/**
 * Created by luis on 12/19/15.
 */

/// <reference path="../app.ts" />

'use strict';

angular.module('MainModule', []);

module MainModule {
  export interface IRaceViewScope extends ng.IScope {
    awesomeThings: any[];
  }

  export class MainViewCtrl {

    constructor (private $scope: IRaceViewScope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }
  }
}

angular.module('MainModule')
  .controller('MainViewCtrl', MainModule.MainViewCtrl);

