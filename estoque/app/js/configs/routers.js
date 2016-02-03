angular.module("EstoqueApp").config(function($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix("!");

    $routeProvider.when("/pessoas", {
        controller : 'PessoaCtrl',
        templateUrl : 'views/pessoas.html'
    })
    .when("/produtos", {
        controller : 'ProdutoCtrl',
        templateUrl : 'views/produtos.html'
    })
    .when("/venda", {
        controller : 'VendaCtrl',
        templateUrl : 'views/venda.html'
    })
        .otherwise("/index");
});