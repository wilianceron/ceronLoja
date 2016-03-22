System.register(['angular2/core', '../components/instancia', 'underscore'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, instancia_1, _;
    var InstanciaService, INSTANCIAS, instanciasPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (instancia_1_1) {
                instancia_1 = instancia_1_1;
            },
            function (_1) {
                _ = _1;
            }],
        execute: function() {
            InstanciaService = (function () {
                function InstanciaService() {
                }
                InstanciaService.prototype.getInstancias = function () {
                    return instanciasPromise;
                };
                InstanciaService.prototype.getInstancia = function (id) {
                    return instanciasPromise.then(function (instancias) { return instancias.filter(function (instancia) { return instancia.id == id; })[0]; });
                };
                InstanciaService.prototype.addInstancia = function (newInstancia) {
                    INSTANCIAS.push(newInstancia);
                };
                InstanciaService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], InstanciaService);
                return InstanciaService;
            })();
            exports_1("InstanciaService", InstanciaService);
            INSTANCIAS = [
                new instancia_1.Instancia(_.uniqueId('instancia_'), 'SinnWeb'),
                new instancia_1.Instancia(_.uniqueId('instancia_'), 'WFM')
            ];
            instanciasPromise = Promise.resolve(INSTANCIAS);
        }
    }
});
//# sourceMappingURL=instancia.service.js.map