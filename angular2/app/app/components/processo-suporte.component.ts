import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {ProcessoSuporteService} from '../services/processo-suporte.service';
import {ProcessoSuporte} from '../components/processoSuporte';

@Component({
	templateUrl : 'app/view/processo-suporte.html',
	providers: [ProcessoSuporteService]
})

export class ProcessoSuporteComponent {
	processosSuporte: ProcessoSuporte[]

	constructor(private _service: ProcessoSuporteService){}

	ngOnInit() {
		this._service.getProcessos().then(processosSuporte => this.processosSuporte = processosSuporte);
	}
}