System.register(['angular2/core', 'angular2/router', '../services/instancia.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, instancia_service_1;
    var InstanciaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (instancia_service_1_1) {
                instancia_service_1 = instancia_service_1_1;
            }],
        execute: function() {
            InstanciaComponent = (function () {
                function InstanciaComponent(_router, _service) {
                    this._router = _router;
                    this._service = _service;
                }
                InstanciaComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getInstancias().then(function (instancias) { return _this.instancias = instancias; });
                };
                InstanciaComponent.prototype.onSelect = function (instancia) {
                    this._router.navigate(['InstanciaDetail', { id: instancia.id }]);
                };
                InstanciaComponent = __decorate([
                    core_1.Component({
                        template: "\n      <h3>Int\u00E2ncias do jboss</h3>\n      <table class=\"table table-hover\">\n        <thead>\n          <tr>\n            <th>Nome</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"#instancia of instancias\" (click)=\"onSelect(instancia)\">\n            <td>{{instancia.nome}}</td>\n          </tr>\n        </tbody>\n      </table>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, instancia_service_1.InstanciaService])
                ], InstanciaComponent);
                return InstanciaComponent;
            })();
            exports_1("InstanciaComponent", InstanciaComponent);
        }
    }
});
//# sourceMappingURL=instancia.component.js.map