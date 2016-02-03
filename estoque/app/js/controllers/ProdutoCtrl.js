angular.module("EstoqueApp").controller('ProdutoCtrl', function($scope, produtoService) {
    $scope.produtos = produtoService.produtos();
    $scope.showModal = false;

    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    };

    $scope.criaProduto = function(produto) {
        produtoService.criaProduto(produto).success(function() {
            carregaProdutos();
            delete $scope.produto;
            $scope.toggleModal();
        }).error(function(data) {
            console.log(data);
            $scope.error = "Não foi possivel cria o produto";
        });
    };

    $scope.carregaProdutos = function() {
        produtoService.carregaProdutos().success(function(data) {
            $scope.produtos = data;
        });
    }
});