import ProdutoService from './produto.service.js';

function ProdutoNovoController($scope, ProdutoService) {
    $scope.produto = {};
    $scope.itens = [
        {"id":"123", "nome": "P"},
        {"id":"456", "nome": "M"},
        {"id":"789", "nome": "G"}
    ];

    $scope.salva = function(produto) {
        ProdutoService.salvaProduto(produto);
    }
}

export default ProdutoNovoController;