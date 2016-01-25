angular.module("EstoqueApp").controller('NovaPessoaCtrl', function($scope, pessoaService) {
    var pessoa = null;

    $scope.criaPessoa = function(novaPessoa) {
        pessoaService.criaPessoa(novaPessoa);
    };
});