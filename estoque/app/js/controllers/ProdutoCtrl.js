angular.module("EstoqueApp").controller('ProdutoCtrl', function($scope, produtoService) {

    $scope.produtos = produtoService.produtos();
    $scope.showModal = false;

    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    };

    $scope.criaProduto = function(produto) {
        produtoService.criaProduto(produto);
        $scope.toggleModal();
    };
});