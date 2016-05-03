import angular from 'angular';
import routesModule from './routes';
import 'jquery';
import 'bootstrap';
import 'materialize';
import 'bootstrap/css/bootstrap.css!'
import 'materialize/dist/css/materialize.css!'

const dependencies = [
	routesModule.name,
];

export default angular.module('lojaweb', dependencies);
