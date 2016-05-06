function NavBarService() {
    var itensSideBar = [];

    this.itensSideBar = function() {
        return itensSideBar;
    }

    this.alteraItensSideBar =  function(itens) {
        itensSideBar = itens;
    }


}

export default NavBarService;