angular.module("EstoqueApp").controller('VendaCtrl', function($scope, pessoaService, vendaService, produtoService) {
    $scope.pessoaSelecionada = null;
    $scope.produtoSelecionado = null;

    $scope.pesquisaPessoa = function(nome) {
        pessoaService.pesquisaPessoa(nome).success(function(data) {
            $scope.pessoaSelecionada = data;
        });
    };

    $scope.pesquisaProduto = function(nomeProduto) {
        produtoService.pesquisaProduto(nomeProduto).success(function(data) {
            $scope.produtoSelecionado = data;
        });
    };

    $scope.mostraProdutos = function() {
        $('#pesquisaPessoa').hide(500);
        $('#selecionaProdutos').show(500);
    };

    $scope.mostraConfirmacao = function() {
        $('#selecionaProdutos').hide(500);
        $('#confirmacaoVenda').show(500);
    };

    $scope.voltaPessoa = function() {
        $('#selecionaProdutos').hide(500);
        $('#pesquisaPessoa').show(500);
    };
    $scope.voltaProduto = function() {
        $('#confirmacaoVenda').hide(500);
        $('#selecionaProdutos').show(500);
    };
});
