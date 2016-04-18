import ProdutoService from './produto.service.js';

 function ProdutoController($scope,ProdutoService) {
	 $scope.produtos = ProdutoService.getProdutos();
}

export default ProdutoController;
