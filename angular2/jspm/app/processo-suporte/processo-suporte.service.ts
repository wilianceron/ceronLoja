import {Injectable} from 'angular2/core';
import * as _ from 'underscore';

import {ProcessoSuporte} from './processoSuporte';

@Injectable()
export class ProcessoSuporteService {
	getProcessos() {
		return processosSuporte;
	}	
}

var PROCESSOSSUPORTE = [
	new ProcessoSuporte(_.uniqueId('ps_'), 'Abono'),
	new ProcessoSuporte(_.uniqueId('ps_'), 'MultiProduto')
];

var processosSuporte = Promise.resolve(PROCESSOSSUPORTE);