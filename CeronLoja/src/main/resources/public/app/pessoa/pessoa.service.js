function PessoaService($http) {

    this.getPessoas = function() {
        return $http.get("http://localhost:9090/pessoa");
    }

    this.salvaPessoa = function(pessoa) {
        return $http.post("http://localhost:9090/pessoa", pessoa);
    }
}

export default PessoaService;