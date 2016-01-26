angular.module("EstoqueApp").controller('NovoProdutoCtrl', function($scope, produtoService) {

    $scope.criaProduto = function(novoProduto) {
        produtoService.criaProduto(novoProduto);
    };
});