import NavBarService from './navbar.service.js';

import 'jquery';
import 'bootstrap';
import 'materialize';
import 'angular-materialize';
import 'bootstrap/css/bootstrap.css!';
import 'materialize/dist/css/materialize.css!';

function NavBarController($scope, NavBarService) {
    Waves.displayEffect();
    $('.button-collapse').sideNav({
            menuWidth: 300,
            closeOnClick: true
        }
    );
    $('.collapsible').collapsible();

    $scope.itensSideBar = function() {
        return NavBarService.itensSideBar();
    }

}

export default NavBarController;