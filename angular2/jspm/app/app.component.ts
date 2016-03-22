import 'zone.js';
import 'reflect-metadata';

import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {InstanciaComponent} from './instancias/instancia.component';
import {ProcessoSuporteComponent} from './processo-suporte/processo-suporte.component';
import {ProcessoSuporteConfigureComponent} from './processo-suporte/processo-suporte-configure.component';
import {InstanciaDetailComponent} from './instancias/instancia-detail.component';

import {InstanciaService} from './instancias/instancia.service';
import {ProcessoSuporteService} from './processo-suporte/processo-suporte.service';

@Component({
    selector: 'app',
    templateUrl: 'app/home.html',
    providers: [InstanciaService, ProcessoSuporteService],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/instancias', name: 'Instancias', component: InstanciaComponent, useAsDefault: true},
    {path: '/processo-suporte', name: 'ProcessoSuporte', component: ProcessoSuporteComponent},
    {path: '/processo-suporte/configure/:id', name: 'ProcessoSuporteConfigure', component: ProcessoSuporteConfigureComponent},
    {path: '/instancias/:id', name: 'InstanciaDetail', component: InstanciaDetailComponent}
])
export class AppComponent {
}
