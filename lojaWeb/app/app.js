import angular from 'angular';
import routesModule from './routes';
import bootstrap from 'bootstrap';

const dependencies = [
	routesModule.name,
];

export default angular.module('lojaweb', dependencies);
