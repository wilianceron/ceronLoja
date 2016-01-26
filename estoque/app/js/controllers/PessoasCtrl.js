angular.module("EstoqueApp").controller('PessoasCtrl', function($scope, pessoaService) {

    $scope.pessoas = pessoaService.pessoas();
});