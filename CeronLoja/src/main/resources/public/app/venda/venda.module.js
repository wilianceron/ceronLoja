import angular from 'angular';

import VendaController from './venda.controller.js';

var dependencies = [];

var module = angular.module('venda', dependencies)
    .controller(VendaController.name, VendaController);

module.rota = {
    controller: VendaController.name,
    controllerAs: 'ctrl',
    templateUrl: 'app/venda/venda.html'
};

export default module;