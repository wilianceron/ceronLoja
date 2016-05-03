import angular from 'angular';
import 'angular-materialize';

const dependencies = [
	'ui.materialize'
];

var module = angular.module('commons', dependencies)
	.directive('coolselect', coolSelect);

function coolSelect(){
	return {
		restrict: 'E',
		name: 'coolselect',
		controller: function() {
		 	$('select').material_select();
		 },
		scope: {
			options : "="
		},
		templateUrl: 'app/commons/coolselect.html'
	};
};


export default module;