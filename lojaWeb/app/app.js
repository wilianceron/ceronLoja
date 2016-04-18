import angular from 'angular';
import routesModule from './routes';

const dependencies = [
	routesModule.name,
];

export default angular.module('lojaweb', dependencies);
