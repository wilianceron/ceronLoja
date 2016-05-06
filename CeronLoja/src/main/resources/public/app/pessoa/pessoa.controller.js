import NavBarService from '../navbar/navbar.service.js';
import PessoaService from './pessoa.service.js';

function PessoaController($scope, NavBarService, PessoaService) {
    $scope.pessoas = [];
    $scope.pessoa = null;
    $scope.exibeNovaPessoa = false;

    carregaPessoas();

    function carregaPessoas() {
        PessoaService.getPessoas().success(function(data) {
            $scope.pessoas = data;
        });
    }

    $scope.novaPessoa = function() {
        $scope.pessoa = {};
        $scope.exibeNovaPessoa = true;
    }

    $scope.salvaPessoa = function(pessoa) {
        PessoaService.salvaPessoa(pessoa).success(function() {
            carregaPessoas();
            $scope.pessoa = {};

        });
    }

    var itens = [
        {  nome: "Nova Pessoa",
            callback: $scope.novaPessoa
        }
    ];
    NavBarService.alteraItensSideBar(itens);
}

export default PessoaController;