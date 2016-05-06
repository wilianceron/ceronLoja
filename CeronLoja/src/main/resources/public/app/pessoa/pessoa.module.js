import angular from 'angular';

import PessoaController from './pessoa.controller.js';
import PessoaService from './pessoa.service.js';

var dependencies = [];

var module = angular.module('pessoa', dependencies)
    .controller(PessoaController.name, PessoaController)
    .service(PessoaService.name, PessoaService);

module.rota = {
    controller: PessoaController,
    controllerAs: 'ctrl',
    templateUrl: 'app/pessoa/pessoa.html'
}

export default module;