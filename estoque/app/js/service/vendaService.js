angular.module('EstoqueApp').service('vendaService', function($http) {
    var vendas = [
        {"pessoa" : "Wilian", "produto" : "saia 1", "data_venda": "10/01/2016"},
        {"pessoa" : "wilian", "produto" : "saia 1", "data_venda": "10/01/2016"},
        {"pessoa" : "Dudu", "produto" : "calça 1", "data_venda": "11/01/2016"}
    ];

    this.criaProduto = function(produto) {
        produtos.push(produto);
        //$http.post("http://10.42.12.161:8080/api/pessoas", pessoa);
    };

    this.produtos = function() {
        return produtos;
    }
});