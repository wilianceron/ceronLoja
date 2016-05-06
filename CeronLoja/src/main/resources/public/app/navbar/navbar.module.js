import angular from 'angular';

import 'jquery';
import 'bootstrap';
import 'materialize';
import 'angular-materialize';
import 'bootstrap/css/bootstrap.css!';
import 'materialize/dist/css/materialize.css!';

import NavBarController from './navbar.controller.js';
import NavBarService from './navbar.service.js';
import 'angular-animate';

const dependencies = [
    'ui.materialize'
];

var module = angular.module('navbar', dependencies)
    .controller(NavBarController.name, NavBarController)
    .service(NavBarService.name, NavBarService);

export default module;