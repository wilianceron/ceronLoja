angular.module("EstoqueApp").controller('ProdutoCtrl', function($scope, produtoService) {

    $scope.produtos = produtoService.produtos();
});