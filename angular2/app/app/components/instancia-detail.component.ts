import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {Instancia} from './instancia';
import {InstanciaService} from '../services/instancia.service';

@Component({
  template: `
      <h3>Instancia Detail Component</h3>
      <div *ngIf="instancia">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ID</td>
              <td>{{instancia.id}}</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>{{instancia.nome}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class InstanciaDetailComponent {
  instancia: Instancia;
  
  constructor(
    private _routeParams:RouteParams,
    private _service:InstanciaService){}
    
    ngOnInit() {
      let id = this._routeParams.get('id');
      this._service.getInstancia(id).then(instancia => this.instancia = instancia);
    }
}