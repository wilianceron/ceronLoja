import angular from 'angular';

import 'jquery';
import 'bootstrap';
import 'materialize';
import 'angular-materialize';
import 'bootstrap/css/bootstrap.css!';
import 'materialize/dist/css/materialize.css!';
import 'app/produto/produto.css!';

import ProdutoController from './produto.controller.js';
import ProdutoService from './produto.service.js';
import NavBarService from '../navbar/navbar.service.js';

const dependencies = [
    'ui.materialize'
];


var module = angular.module('produto', dependencies)
    .controller(ProdutoController.name, ProdutoController)
    .service('ProdutoService', ProdutoService)
    .service(NavBarService.name, NavBarService);

module.rota = {
    controller: ProdutoController.name,
    controllerAs: 'ctrl',
    templateUrl: 'app/produto/produto.html'
};

export default module;