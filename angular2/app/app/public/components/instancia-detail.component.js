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
    var InstanciaDetailComponent;
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
            InstanciaDetailComponent = (function () {
                function InstanciaDetailComponent(_routeParams, _service) {
                    this._routeParams = _routeParams;
                    this._service = _service;
                }
                InstanciaDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get('id');
                    this._service.getInstancia(id).then(function (instancia) { return _this.instancia = instancia; });
                };
                InstanciaDetailComponent = __decorate([
                    core_1.Component({
                        template: "\n      <h3>Instancia Detail Component</h3>\n      <div *ngIf=\"instancia\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Nome</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>ID</td>\n              <td>{{instancia.id}}</td>\n            </tr>\n            <tr>\n              <td>Brand</td>\n              <td>{{instancia.nome}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, instancia_service_1.InstanciaService])
                ], InstanciaDetailComponent);
                return InstanciaDetailComponent;
            })();
            exports_1("InstanciaDetailComponent", InstanciaDetailComponent);
        }
    }
});
//# sourceMappingURL=instancia-detail.component.js.map