System.register(['angular2/core', 'angular2/router', './instancia.component', './processo-suporte.component', './instancia-detail.component', 'ainstancia.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, instancia_component_1, processo_suporte_component_1, instancia_detail_component_1, ainstancia_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (instancia_component_1_1) {
                instancia_component_1 = instancia_component_1_1;
            },
            function (processo_suporte_component_1_1) {
                processo_suporte_component_1 = processo_suporte_component_1_1;
            },
            function (instancia_detail_component_1_1) {
                instancia_detail_component_1 = instancia_detail_component_1_1;
            },
            function (ainstancia_service_1_1) {
                ainstancia_service_1 = ainstancia_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'app/view/home.html',
                        providers: [ainstancia_service_1.InstanciaService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/instancias', name: 'Instancias', component: instancia_component_1.InstanciaComponent, useAsDefault: true },
                        { path: '/processo-suporte', name: 'ProcessoSuporte', component: processo_suporte_component_1.ProcessoSuporteComponent },
                        { path: '/instancias/:id', name: 'InstanciaDetail', component: instancia_detail_component_1.InstanciaDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map