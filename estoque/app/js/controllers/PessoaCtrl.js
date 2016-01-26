angular.module("EstoqueApp").controller('PessoaCtrl', function($scope, pessoaService) {

    $scope.pessoas = pessoaService.pessoas();

    $scope.showNovaPessoa = function() {
        console.log("nova pessoa");
    }
});