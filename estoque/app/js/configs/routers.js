angular.module("EstoqueApp").config(function($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix("!");

    $routeProvider.when("/pessoas", {
        controller : 'PessoaCtrl',
        templateUrl : 'pessoas.html'
    })
    .when("/produtos", {
        controller : 'ProdutoCtrl',
        templateUrl : 'produtos.html'
    })
    .when("/venda", {
        controller : 'VendaCtrl',
        templateUrl : 'venda.html'
    })
        .otherwise("/index");
});