import angular from 'angular';

import 'jquery';
import 'bootstrap';
import 'materialize';
import 'angular-materialize';
import 'bootstrap/css/bootstrap.css!'
import 'materialize/dist/css/materialize.css!'

import HomeController from './home.controller.js';

const dependencies = [
    'ui.materialize'
];


var module = angular.module('home', dependencies)
    .controller(HomeController.name, HomeController);

module.rota = {
    controller: HomeController.name,
    controllerAs: 'ctrl',
    templateUrl: 'app/home/home.html'
};

export default module;