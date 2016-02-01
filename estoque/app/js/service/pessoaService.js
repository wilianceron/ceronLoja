angular.module('EstoqueApp').service('pessoaService', function($http) {
    var pessoas = [
        {"nome" : "Wilian", "email" : "wilian@aa.com"},
        {"nome" : "Dudu", "email" : "dudu@aa.com"},
        {"nome" : "Valdo", "email" : "valdo@aa.com"}
    ];

    this.criaPessoa = function(pessoa) {
        pessoas.push(pessoa);
        //$http.post("http://10.42.12.161:8080/api/pessoas", pessoa);
    };

    this.pessoas = function() {
        return pessoas;
    };

    this.pesquisaPessoa = function(nomePesquisa) {
        return pessoas.filter(function(pessoa) {
            if(pessoa.nome == nomePesquisa) return pessoa;
        });
    }
});