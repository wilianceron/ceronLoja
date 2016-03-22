import {Injectable} from 'angular2/core';
import * as _ from 'underscore';

import {ProcessoSuporte} from './processoSuporte';

@Injectable()
export class ProcessoSuporteService {
    getProcessosSuporte() {
        return processosSuportePromise;
    }

    getProcessoSuporte(id:string) {
        console.log(id);
        console.log(processosSuportePromise.then(processosPuporte => processosPuporte.filter(processoSuporte => processoSuporte.id == id)[0]));
        return processosSuportePromise.then(processosPuporte => processosPuporte.filter(processoSuporte => processoSuporte.id == id)[0]);
    }
}

var PROCESSOSSUPORTE = [
    new ProcessoSuporte(_.uniqueId('ps_'), 'Abono', '01/01/2016'),
    new ProcessoSuporte(_.uniqueId('ps_'), 'MultiProduto', '22/12/2015')
];

var processosSuportePromise = Promise.resolve(PROCESSOSSUPORTE);