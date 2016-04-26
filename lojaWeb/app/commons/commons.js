import angular from 'angular';

const dependencies = [];

var module = angular.module('commons', dependencies)
	.directive('coolselect', coolSelect);

function coolSelect(){
	return {
		name: 'coolselect',
		controller: function($scope) {
		 	$('select').material_select();
		 },
		templateUrl: 'app/commons/coolselect.html'
	};
};


export default module;