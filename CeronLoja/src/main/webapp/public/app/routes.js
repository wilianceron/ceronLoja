'use strict';

import angular from 'angular';
import 'angular-route';
import produto from 'app/produto/produto.module';


const dependencies = [
    'ngRoute',
    produto.name
];

var module = angular.module('routes', dependencies);

module.config(config);

config.$inject = ['$routeProvider'];

function config($routeProvider) {
    $routeProvider
        .when('/produto', produto.rota)
        .when('/produto/novo', produto.rotaNovo)
        .otherwise('/');
}


export default module;