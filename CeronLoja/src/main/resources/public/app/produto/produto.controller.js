import ProdutoService from './produto.service.js';

 function ProdutoController($scope,ProdutoService) {
	 $scope.produtos = [];

     carregaProdutos();

     function carregaProdutos() {
         ProdutoService.getProdutos().success(function(data) {
             $scope.produtos = data;
         });
     }
}

export default ProdutoController;
