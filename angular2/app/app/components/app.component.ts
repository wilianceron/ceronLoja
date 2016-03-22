import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {InstanciaComponent} from './instancia.component';
import {ProcessoSuporteComponent} from './processo-suporte.component';
import {InstanciaDetailComponent} from './instancia-detail.component';

import {InstanciaService} from 'ainstancia.service';

@Component({
  selector: 'app',
  templateUrl: 'app/view/home.html',
  providers: [InstanciaService],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
		{ path: '/instancias', name: 'Instancias', component: InstanciaComponent, useAsDefault: true },
		{ path: '/processo-suporte', name: 'ProcessoSuporte', component: ProcessoSuporteComponent },
		{ path: '/instancias/:id', name: 'InstanciaDetail', component: InstanciaDetailComponent}
])
export class AppComponent {
}
