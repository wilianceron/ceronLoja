import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {ProcessoSuporteService} from './processo-suporte.service';
import {ProcessoSuporte} from './processoSuporte';

@Component({
    templateUrl: 'app/processo-suporte/processo-suporte.html',
    providers: [ProcessoSuporteService]
})

export class ProcessoSuporteComponent {
    processosSuporte:ProcessoSuporte[];

    constructor(private _router:Router, private _service:ProcessoSuporteService) {
    }

    ngOnInit() {
        this._service.getProcessosSuporte().then(processosSuporte => this.processosSuporte = processosSuporte);
    }

    configure(id:string) {
        this._router.navigate(['ProcessoSuporteConfigure', {id: id}]);
    }
}