angular.module('EstoqueApp').service('pessoaService', function($http, config) {
    this.criaPessoa = function(pessoa) {
        return $http.post(config.baseUrl + "/persons", pessoa);
    };

    this.pessoas = function() {
        return $http.get(config.baseUrl + "/persons");
    };

    this.pesquisaPessoa = function(nomePesquisa) {
        return $http.get(config.baseUrl + "/persons", nomePesquisa);
    }
});