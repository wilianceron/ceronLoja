function PessoaService($http) {

    this.getPessoas = function() {
        return $http.get("http://10.42.12.161:9090/pessoa");
    }

    this.salvaPessoa = function(pessoa) {
        return $http.post("http://10.42.12.161:9090/pessoa", pessoa);
    }
}

export default PessoaService;