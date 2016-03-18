import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {Aluno} from './aluno';
import {AlunoService} from './aluno.service';

@Component({
  template: `
      <h3>TESTE</h3>
    `
})
export class AlunosListComponent {
  alunos: Aluno[];

  constructor(private _router: Router, private _service: AlunoService) { }

  ngOnInit() {
    this._service.getAlunos().then(alunos => this.alunos = alunos);
  }

  onSelect(aluno: Aluno) {
    this._router.navigate(['AlunoDetail', { id: aluno.id }]);
  }
}