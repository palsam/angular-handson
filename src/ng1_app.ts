/**
 * This file defines the root module of the Angular 1 of the application.
 */

// import angular1
import * as angular from 'angular'
import 'angular-route'

// import app modules
import {MenuModule} from './menu';
import {AngularjsModule} from './angularjsmodule'

export const Ng1AppModule = angular.module('Ng1AppModule', ['ngRoute', AngularjsModule.name, MenuModule.name]);

Ng1AppModule.config(($locationProvider) => {
  $locationProvider.html5Mode(true)
});
