angular.module('EstoqueApp').service('produtoService', function($http) {
    var produtos = [
        {"descricao" : "calça 1", "tipo" : "calca", "preco": 123.12},
        {"descricao" : "camisa 2", "tipo" : "camisa", "preco": 10},
        {"descricao" : "saia 1", "tipo" : "saia", "preco": 29.90}
    ];

    this.criaProduto = function(produto) {
        produtos.push(produto);
        //$http.post("http://10.42.12.161:8080/api/pessoas", pessoa);
    };

    this.produtos = function() {
        return produtos;
    }
});