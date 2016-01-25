angular.module('EstoqueApp').service('pessoaService', function($http) {
    this.criaPessoa = function(pessoa) {
        return $http.post("http://10.42.12.161:8080/api/pessoas", pessoa);
    };
});