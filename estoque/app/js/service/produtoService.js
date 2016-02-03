angular.module('EstoqueApp').service('produtoService', function($http) {
    this.criaProduto = function(produto) {
        $http.post("http://localhost:8080/api/produtos", produto);
    };

    this.carregaProdutos = function() {
        return $http.get("http://localhost:8080/api/produtos");
    }

    this.pesquisaProduto = function(nomeProduto) {
        return $http.get(config.baseUrl + "/produtos", nomeProduto);
    }
});