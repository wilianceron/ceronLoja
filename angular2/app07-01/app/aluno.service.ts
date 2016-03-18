import {Injectable} from 'angular2/core';
import {Aluno} from './aluno';
import * as _ from 'underscore';


@Injectable()
export class AlunoService {
  getAlunos() {
    return alunosPromise;
  }
  getAluno(id: string) {
    return alunosPromise.then(alunos => alunos.filter(aluno => aluno.id == id)[0]);
  }
  addAluno(newAluno: Aluno) {
    ALUNOS.push(newAluno);
  }
}

var ALUNOS = [
  new Aluno(_.uniqueId('aluno_'), 'Joao da Silva'),
  new Aluno(_.uniqueId('aluno_'), 'Maria das Dores')
];

var alunosPromise = Promise.resolve(ALUNOS);