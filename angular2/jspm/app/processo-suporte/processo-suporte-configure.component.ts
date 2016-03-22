import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {ProcessoSuporte} from './processoSuporte';
import {ProcessoSuporteService} from './processo-suporte.service';

@Component({
    templateUrl : 'app/processo-suporte/processo-suporte-configure.html',
    directives: [ROUTER_DIRECTIVES]
})

export class ProcessoSuporteConfigureComponent {
    processoSuporte:ProcessoSuporte;

    constructor(private _routeParams:RouteParams, private _service:ProcessoSuporteService) {
    }

    ngOnInit() {
        let id = this._routeParams.get('id');
        this._service.getProcessoSuporte(id).then(processoSuporte => this.processoSuporte = processoSuporte);
    }
}