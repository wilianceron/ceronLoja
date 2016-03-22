System.register(['angular2/core', 'underscore', '../components/processoSuporte'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, _, processoSuporte_1;
    var ProcessoSuporteService, PROCESSOSSUPORTE, processosSuporte;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {
                _ = _1;
            },
            function (processoSuporte_1_1) {
                processoSuporte_1 = processoSuporte_1_1;
            }],
        execute: function() {
            ProcessoSuporteService = (function () {
                function ProcessoSuporteService() {
                }
                ProcessoSuporteService.prototype.getProcessos = function () {
                    return processosSuporte;
                };
                ProcessoSuporteService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ProcessoSuporteService);
                return ProcessoSuporteService;
            })();
            exports_1("ProcessoSuporteService", ProcessoSuporteService);
            PROCESSOSSUPORTE = [
                new processoSuporte_1.ProcessoSuporte(_.uniqueId('ps_'), 'Abono'),
                new processoSuporte_1.ProcessoSuporte(_.uniqueId('ps_'), 'MultiProduto')
            ];
            processosSuporte = Promise.resolve(PROCESSOSSUPORTE);
        }
    }
});
//# sourceMappingURL=processo-suporte.service.js.map