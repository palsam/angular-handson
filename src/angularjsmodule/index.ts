// This module is in the midst of transitiong from Angular 1 to Angular 2.
// We migrated MessageTextCmp to Angular2.
import * as angular from 'angular';
import {NgModule} from '@angular/core';
import {AngularjsCmp} from './angularjs_cmp';

export const AngularjsModule = angular.module('AngularjsModule', ['ngRoute']);

AngularjsModule.component('angularjscmp', AngularjsCmp);
AngularjsModule.config(($routeProvider) => {
  $routeProvider.when('/angularjsmodule', {template : '<angularjscmp></angularjscmp>'});
});

@NgModule({
  // components migrated to Angular 2 should be registered here
})
export class AngularjsNgModule {}
