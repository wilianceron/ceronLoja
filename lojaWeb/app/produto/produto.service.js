import _ from "underscore";

function ProdutoService() {
	var produtos = [
			{'nome': 'Calça tolada', 'id':'123'},
		    {'nome': 'Blusa Bonita', 'id':'456'}
		];

	this.getProdutos = function() {
		return produtos;
	}

	this.getProduto = function(nome) {
		return _.filter(produto, function(produto) { return produto.nome === nome })[0];
	}
};

export default ProdutoService;