angular.module("EstoqueApp").config(function($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix("!");

    $routeProvider.when("/novaPessoa", {
        controller : 'NovaPessoaCtrl',
        templateUrl : 'novaPessoa.html'
    }).when("/pessoas", {
        controller : 'PessoasCtrl',
        templateUrl : 'pessoas.html'
    })
        .otherwise("/index");
});