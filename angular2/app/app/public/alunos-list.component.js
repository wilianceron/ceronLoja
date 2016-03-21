System.register(['angular2/core', 'angular2/router', './aluno.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, aluno_service_1;
    var AlunosListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (aluno_service_1_1) {
                aluno_service_1 = aluno_service_1_1;
            }],
        execute: function() {
            AlunosListComponent = (function () {
                function AlunosListComponent(_router, _service) {
                    this._router = _router;
                    this._service = _service;
                }
                AlunosListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getAlunos().then(function (alunos) { return _this.alunos = alunos; });
                };
                AlunosListComponent.prototype.onSelect = function (aluno) {
                    this._router.navigate(['AlunoDetail', { id: aluno.id }]);
                };
                AlunosListComponent = __decorate([
                    core_1.Component({
                        template: "\n      <h3>TESTE</h3>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, aluno_service_1.AlunoService])
                ], AlunosListComponent);
                return AlunosListComponent;
            })();
            exports_1("AlunosListComponent", AlunosListComponent);
        }
    }
});
//# sourceMappingURL=alunos-list.component.js.map