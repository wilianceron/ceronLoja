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
		scope: true,
		templateUrl: 'app/commons/coolselect.html',
		controller: function($scope) {
			$scope.changed = function() {
				$scope.model[$scope.field] = $scope.value;
			}
		}

	};
};


export default module;