import angular from 'angular';
import commons from '../commons/commons';

import 'jquery';
import 'bootstrap';
import 'materialize';
import 'bootstrap/css/bootstrap.css!'
import 'materialize/dist/css/materialize.css!'

import ProdutoNovoController from './produto-novo.controller.js';
import ProdutoController from './produto.controller.js';
import ProdutoService from './produto.service.js';

const dependencies = [
	commons.name
];


var module = angular.module('produto', dependencies)
    .controller(ProdutoController.name, ProdutoController)
    .controller(ProdutoNovoController.name, ProdutoNovoController)
    .service('ProdutoService', ProdutoService);

module.rota = {
    controller: ProdutoController.name,
    controllerAs: 'ctrl',
    templateUrl: 'app/produto/produto.html'
};

module.rotaNovo = {
    controller: ProdutoNovoController.name,
    controllerAs: 'ctrl',
    templateUrl: 'app/produto/produto-novo.html'
};

export default module;