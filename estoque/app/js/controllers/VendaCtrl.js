angular.module("EstoqueApp").controller('VendaCtrl', function($scope, pessoaService, vendaService, produtoService) {
    $scope.vendas = vendaService.vendas;
    $scope.pessoaSelecionada = null;
    $scope.produtosDisponiveis = produtoService.produtos();

    $scope.pesquisaPessoa = function(nome) {
        $scope.pessoaSelecionada = pessoaService.pesquisaPessoa(nome);

    };

    $scope.adicionaProduto = function(nomeProduto) {

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
