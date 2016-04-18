'use strict';

angular.module('projectTemplateApp.auth', [
  'projectTemplateApp.constants',
  'projectTemplateApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
