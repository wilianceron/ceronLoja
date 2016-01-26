angular.module("EstoqueApp").config(function($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix("!");

    $routeProvider.when("/novaPessoa", {
        controller : 'NovaPessoaCtrl',
        templateUrl : 'novaPessoa.html'
    })
    .when("/pessoas", {
        controller : 'PessoaCtrl',
        templateUrl : 'pessoas.html'
    })
    .when("/novoProduto", {
        controller : 'NovoProdutoCtrl',
        templateUrl : 'novoProduto.html'
    })
    .when("/produtos", {
        controller : 'ProdutoCtrl',
        templateUrl : 'produtos.html'
    })
        .otherwise("/index");
});