System.register(['angular2/core', './aluno', 'underscore'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, aluno_1, _;
    var AlunoService, ALUNOS, alunosPromise;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (aluno_1_1) {
                aluno_1 = aluno_1_1;
            },
            function (_1) {
                _ = _1;
            }],
        execute: function() {
            AlunoService = (function () {
                function AlunoService() {
                }
                AlunoService.prototype.getAlunos = function () {
                    return alunosPromise;
                };
                AlunoService.prototype.getAluno = function (id) {
                    return alunosPromise.then(function (alunos) { return alunos.filter(function (aluno) { return aluno.id == id; })[0]; });
                };
                AlunoService.prototype.addAluno = function (newAluno) {
                    ALUNOS.push(newAluno);
                };
                AlunoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AlunoService);
                return AlunoService;
            })();
            exports_1("AlunoService", AlunoService);
            ALUNOS = [
                new aluno_1.Aluno(_.uniqueId('aluno_'), 'Joao da Silva'),
                new aluno_1.Aluno(_.uniqueId('aluno_'), 'Maria das Dores')
            ];
            alunosPromise = Promise.resolve(ALUNOS);
        }
    }
});
//# sourceMappingURL=aluno.service.js.map