import angular from 'angular';

import RoutesModule from './routes';
import NavBarModule from './navbar/navbar.module.js';
import '../index.css!';

const dependencies = [
	RoutesModule.name,
	NavBarModule.name
];

export default angular.module('lojaweb', dependencies);
