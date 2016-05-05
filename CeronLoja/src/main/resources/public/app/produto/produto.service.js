import _ from "underscore";

function ProdutoService($http) {

	this.getProdutos = function() {
		return $http.get("http://localhost:9090/produto");
	}

	this.getProduto = function(produto) {
		return $http.get("http://localhost:9090/produto/" + produto.id);
	}

	this.salvaProduto = function(produto) {
		return $http.post("http://localhost:9090/produto", produto);
	}
};

export default ProdutoService;