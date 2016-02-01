angular.module("EstoqueApp").controller('PessoaCtrl', function($scope, pessoaService) {
    $scope.showModal = false;

    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    };

    $scope.criaPessoa = function(pessoa) {
        pessoaService.criaPessoa(angular.copy(pessoa));
        delete $scope.pessoa;
        $scope.toggleModal();
    };
    $scope.getPessoas = function () {
        return pessoaService.pessoas();
    }
});