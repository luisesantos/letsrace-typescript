/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../interface/interface.module.ts" />

((): void=> {
  angular.module("LetsRace.RestModule", [
    'LetsRace.InterfaceModule'
  ]);
})()

module LetsRace.RestModule {

  export class Race implements LetsRace.InterfaceModule.IRace{

    $get: any;

    name:string = "";
    description:string = "";

    httpService: ng.IHttpService;
    url: string = "http://localhost:8000/races/?format=json";

    constructor( $http: ng.IHttpService ) {
      this.httpService = $http;
    }

    list(params:any):ng.IPromise<Array<LetsRace.InterfaceModule.IModel>>{
      var result: ng.IPromise< any > = this.httpService.get( this.url, params )
        .then( ( response: any ): ng.IPromise< any > => this.handlerResponded( response, params ) );
      return result;
    }

    get():ng.IPromise<LetsRace.InterfaceModule.IModel>{
      console.log('Error: Not Implemented Yet');
      return;
    }

    save():ng.IPromise<LetsRace.InterfaceModule.IModel>{
      console.log('Error: Not Implemented Yet');
      return;
    }

    update():ng.IPromise<LetsRace.InterfaceModule.IModel>{
      console.log('Error: Not Implemented Yet');
      return;
    }

    destroy():ng.IPromise<LetsRace.InterfaceModule.IModel>{
      console.log('Error: Not Implemented Yet');
      return;
    }

    handlerResponded( response: any, params: any ): any {
      return response.data;
    }
  }
  angular.module("LetsRace.RestModule").
    service("LetsRace.RestModule.Race", Race);
}
