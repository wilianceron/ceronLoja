'use strict';

import angular from 'angular';
import 'angular-route';
import produto from 'app/produto/produto.module';
import home from 'app/home/home.module';
import venda from 'app/venda/venda.module';
import pessoa from 'app/pessoa/pessoa.module';


const dependencies = [
    'ngRoute',
    produto.name,
    home.name,
    venda.name,
    pessoa.name
];

var module = angular.module('routes', dependencies);

module.config(config);

config.$inject = ['$routeProvider'];

function config($routeProvider) {
    $routeProvider
        .when('/home', home.rota)
        .when('/produto', produto.rota)
        .when('/venda', venda.rota)
        .when('/pessoa', pessoa.rota)
        .otherwise('/home');
}


export default module;