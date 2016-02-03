angular.module("EstoqueApp").controller('PessoaCtrl', function($scope, pessoaService) {
    $scope.showModal = false;
    $scope.pessoas = [];

    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    };

    $scope.carregaPessoas = function () {
        pessoaService.pessoas().success(function(data) {
            $scope.pessoas = data;
        }).error(function(data, status) {
            console.log(data);
            console.log(status);
            $scope.error = "Não foi possível carregar os dados!";
        });
    }

    $scope.criaPessoa = function(pessoa) {
        pessoaService.criaPessoa(angular.copy(pessoa)).success(function(data) {
            $scope.carregaPessoas();
            delete $scope.pessoa;
            $scope.toggleModal();
        }).error(function(data) {
            console.log(data);
            $scope.error = "Não foi possível cria a pessoa";
        });
    };

});