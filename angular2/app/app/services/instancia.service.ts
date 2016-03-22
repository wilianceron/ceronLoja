import {Injectable} from 'angular2/core';
import {Instancia} from '../components/instancia';
import * as _ from 'underscore';


@Injectable()
export class InstanciaService {
  getInstancias() {
    return instanciasPromise;
  }
  getInstancia(id: string) {
    return instanciasPromise.then(instancias => instancias.filter(instancia => instancia.id == id)[0]);
  }
  addInstancia(newInstancia: Instancia) {
    INSTANCIAS.push(newInstancia);
  }
}

var INSTANCIAS = [
  new Instancia(_.uniqueId('instancia_'), 'SinnWeb'),
  new Instancia(_.uniqueId('instancia_'), 'WFM')
];

var instanciasPromise = Promise.resolve(INSTANCIAS);