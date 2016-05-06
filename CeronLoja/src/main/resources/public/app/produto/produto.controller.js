import ProdutoService from './produto.service.js';

 function ProdutoController($scope,ProdutoService, NavBarService) {
     $scope.produto = null;
     $scope.exibeNovoProduto = false;
	 $scope.produtos = [];

     carregaProdutos();

     function carregaProdutos() {
         ProdutoService.getProdutos().success(function(data) {
             $scope.produtos = data;
         });
     }

     $scope.salvaProduto = function(produto) {
         ProdutoService.salvaProduto(produto).success(function() {
             carregaProdutos();
         });
     }

     $scope.novoProduto = function() {
         $scope.produto = {};
         setExibeNovoProduto();
     }

     function setExibeNovoProduto() {
         $scope.exibeNovoProduto = !$scope.exibeNovoProduto;
     }

     var itens = [
         {  nome: "Novo Produto",
             callback: $scope.novoProduto
         }
     ];
     NavBarService.alteraItensSideBar(itens);
}

export default ProdutoController;
