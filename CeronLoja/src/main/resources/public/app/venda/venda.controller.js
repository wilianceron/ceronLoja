import NavBarService from '../navbar/navbar.service.js';

function VendaController($scope, NavBarService) {
    $scope.teste = 'teste';
    $scope.venda = null;

    $scope.novaVenda = function() {
        $scope.venda = {};
    }

    $scope.buscarPessoa = function () {

    }

    var itens = [
        {  nome: "Nova Venda",
            callback: $scope.novaVenda
        }
    ];
    NavBarService.alteraItensSideBar(itens);
}

export default VendaController;