import {Injectable} from 'angular2/core';
import {Instancia} from './instancia';
import * as _ from 'underscore';


@Injectable()
export class InstanciaService {
    getInstancias() {
        return instanciasPromise;
    }

    getInstancia(id:string) {
        console.log(instanciasPromise.then(instancias => instancias.filter(instancia => instancia.id == id)[0]));
        return instanciasPromise.then(instancias => instancias.filter(instancia => instancia.id == id)[0]);
    }
}

var INSTANCIAS = [
    new Instancia(_.uniqueId('instancia_'), 'SinnWeb'),
    new Instancia(_.uniqueId('instancia_'), 'WFM')
];

var instanciasPromise = Promise.resolve(INSTANCIAS);