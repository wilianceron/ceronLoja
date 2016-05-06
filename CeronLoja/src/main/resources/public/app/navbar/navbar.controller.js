import NavBarService from './navbar.service.js';

import 'jquery';
import 'bootstrap';
import 'materialize';
import 'angular-materialize';
import 'bootstrap/css/bootstrap.css!';
import 'materialize/dist/css/materialize.css!';

function NavBarController($scope, NavBarService) {
    $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 240
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        }
    );
    $('.collapsible').collapsible();

    $scope.itensSideBar = function() {
        return NavBarService.itensSideBar();
    }

}

export default NavBarController;